import { TestBed } from '@angular/core/testing';
import { ParagraphComponent } from './paragraph.component';
import { Component, Input } from "@angular/core";
import { ExpressionComponent } from "../expression/expression.component";
import { KatexDirective } from "../directives/katex.directive";

@Component({
  template: `
    <nt-paragraph (error)="onError($event)">There <h1>(test)</h1> should be an error: $x_2$</nt-paragraph>
    <nt-paragraph>This is <b>a</b> correct < expression: $x_2$></nt-paragraph>
  `
})
class ParagraphTestComponent {
  @Input() options: any = {};
  onError(_: any) {};
}

describe('ParagraphComponent', () => {
  let component: ParagraphComponent;
  let testComponent: ParagraphTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatexDirective, ExpressionComponent, ParagraphComponent, ParagraphTestComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.ngOnChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ParagraphTestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(testComponent).toBeTruthy();
    //fixture.whenStable().then(() => {
    //  console.log(fixture.nativeElement.outerHTML);
    //})

  });
});
