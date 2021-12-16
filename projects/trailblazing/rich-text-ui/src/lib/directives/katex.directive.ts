import { Directive, EventEmitter, Input, Output, ElementRef, OnChanges } from '@angular/core';
import { KatexOptions } from 'katex';
import { KatexService } from "../services/katex.service";

@Directive({
  selector: '[katex]',
})
export class KatexDirective implements OnChanges {

  /**
   * The default options for the rendering
   * @private
   */
  private defaultOptions: KatexOptions = { output: 'html' };

  /**
   * The raw content of the expression
   */
  @Input() expression: string = '';

  /**
   * The additional options for the rendering
   */
  @Input() options?: any = undefined;

  /**
   * Enable the debug mode in which errors will be rendered directly to the destination
   */
  @Input() debug: boolean = false;

  /**
   * The event that will be emitted to the parent component in case of errors
   */
  @Output() error = new EventEmitter<any>();

  /**
   *
   * @param {ElementRef} el the target element (injected)
   * @param {KatexService} service the katex service (injected)
   */
  constructor(private el: ElementRef, private service: KatexService) { }

  /**
   * The internal processing on changes
   */
  ngOnChanges() {
    try {
      this.el.nativeElement.classList.remove('has-error');
      this.service.render(this.expression, this.el, {...this.defaultOptions, ...this.options});
    } catch (err: any) {
      if (this.debug) {
        this.el.nativeElement.classList.add('has-error');
        this.el.nativeElement.innerText = err.toString();
      }
      this.error.emit(err);
    }
  }
}
