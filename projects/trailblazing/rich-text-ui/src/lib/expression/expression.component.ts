import { Component, EventEmitter, Input, Output, } from '@angular/core';

/**
 * This is mathematical expression component.
 * The expression could be either inline within a paragraph or separated as a new paragraph
 */
@Component({
  selector: 'nt-expression',
  templateUrl: './expression.component.html',
  styleUrls: [ './expression.component.css' ],
})
export class ExpressionComponent  {

  /**
   * The default options for expression rendering
   */
  defaultOptions: any = { output: 'html', displayMode: false };

  /**
   * The content of the expression, excluding the delimiters such as `$`, `$$`, `\(`, `\)`, `\[` and `\]`.
   */
  @Input() content: string = '';

  /**
   * The options for rendering the expression
   */
  @Input() options?: any = undefined;

  /**
   * Enabling debug mode in which the error message will be printed out in case of math syntax errors
   */
  @Input() debug = false;

  /**
   * The event that will be emitted in case of errors
   */
  @Output() error = new EventEmitter<any>();

  /**
   * The internal error handler of the expression. This handler will emit an event to parent component
   * @param error describe the error in details with `toString`
   */
  onError(error: any) {
    this.error.emit(error);
  }
}
