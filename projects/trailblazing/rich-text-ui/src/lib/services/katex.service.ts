import { ElementRef, Injectable } from '@angular/core';
import { render as katexRender, renderToString as katexRenderToString, KatexOptions } from 'katex';

/**
 * An Angular service wrapping the Katex rendering functions
 */
@Injectable({
  providedIn: 'root'
})
export class KatexService {
  /**
   * Render an expression string into an HTML element
   * @param {string} expression the raw content to be rendered
   * @param {ElementRef} element the target element of the rendering
   * @param {KatexOptions} options further options for the rendering process
   */
  render(expression: string, element: ElementRef, options?: KatexOptions) {
    return katexRender(expression, element.nativeElement, options);
  }

  /**
   * Render an expression string to an HTML string
   * @param {string} expression the raw content to be rendered
   * @param {KatexOptions} options further options for the rendering process
   * @return {string} result of the rendering
   */
  renderToString(expression: string, options?: KatexOptions): string {
    return katexRenderToString(expression, options);
  }
}
