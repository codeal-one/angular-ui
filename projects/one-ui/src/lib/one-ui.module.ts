import { NgModule } from '@angular/core';
import { OneUiComponent } from './one-ui.component';
import { OneIconComponent } from './one-icon/one-icon.component';
import { OneButtonComponent } from "./button/one-button.component";



@NgModule({
  declarations: [
    OneUiComponent,
    OneIconComponent,
    OneButtonComponent
  ],
  imports: [
  ],
  exports: [
    OneUiComponent
  ]
})
export class OneUiModule { }
