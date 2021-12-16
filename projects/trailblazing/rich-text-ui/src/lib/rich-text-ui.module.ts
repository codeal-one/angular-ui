import { NgModule } from '@angular/core';
import { KatexService } from "./services/katex.service";
import { KatexDirective } from "./directives/katex.directive";
import { ExpressionComponent } from "./expression/expression.component";
import { ParagraphComponent } from "./paragraph/paragraph.component";



@NgModule({
  declarations: [
    KatexDirective,
    ExpressionComponent,
    ParagraphComponent,
  ],
  providers: [
    KatexService
  ],
  exports: [
    ExpressionComponent,
    ParagraphComponent
  ]
})
export class RichTextUiModule { }
