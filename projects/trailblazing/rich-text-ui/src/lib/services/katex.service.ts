import { ElementRef, Injectable } from '@angular/core';
import { render as katexRender, renderToString as katexRenderToString, KatexOptions } from 'katex';

@Injectable({
  providedIn: 'root'
})
export class KatexService {
  render(expression: string, element: ElementRef, options?: KatexOptions) {
    return katexRender(expression, element.nativeElement, options);
  }

  renderToString(expression: string, options?: KatexOptions) {
    return katexRenderToString(expression, options);
  }
}
