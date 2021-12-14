import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'nt-expression',
  templateUrl: './expression.component.html',
  styleUrls: [ './expression.component.css' ],
})
export class ExpressionComponent  {

  defaultOptions: any = { output: 'html' };

  @Input() content: string = '';
  @Input() options?: any = undefined;
  @Input() debug = false;
  @Output() error = new EventEmitter<any>(true);

  onError(error: any) {
    this.error.emit(error);
  }
}
