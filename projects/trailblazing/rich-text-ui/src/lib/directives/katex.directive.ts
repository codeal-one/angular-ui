import { Directive, EventEmitter, Input, Output, ElementRef, OnChanges } from '@angular/core';
import { KatexOptions } from 'katex';
import { KatexService } from "../services/katex.service";

@Directive({
  selector: '[katex]',
})
export class KatexDirective implements OnChanges {

  private defaultOptions: KatexOptions = { output: 'html' };
  @Input() expression: string = '';
  @Input() options?: any = undefined;
  @Input() debug: boolean = false;
  @Output() error = new EventEmitter<any>();

  constructor(private el: ElementRef, private service: KatexService) { }

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
