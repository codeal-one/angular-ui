import { KatexDirective } from "./katex.directive";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component, Input } from "@angular/core";


@Component({
  template: `
    <span>x^1</span>
    <span katex expression="x^2"></span>
    <span katex [options]="options" expression="x^3"></span>
    <span katex (error)="onError($event)" expression="\\x^4"></span>
  `
})
class TestKatexDirectiveComponent {
  @Input() options: any = undefined;
  onError(_: any) { }
}

describe('KatexDirective', () => {
  let fixture: ComponentFixture<TestKatexDirectiveComponent>;
  let testComponent: TestKatexDirectiveComponent;
  let onErrorSpy: jasmine.Spy;

  beforeEach(async () => {
    // arrange
    fixture = TestBed.configureTestingModule({
      declarations: [ KatexDirective, TestKatexDirectiveComponent ]
    }).createComponent(TestKatexDirectiveComponent);
    testComponent = fixture.componentInstance;
    testComponent.options = { output: 'mathml' };
    onErrorSpy = spyOn(testComponent, "onError").and.stub();

    // act
    fixture.detectChanges();
  });

  it('should be created successfully', () => {
    // arrange
    const directives = fixture.debugElement.queryAll(By.directive(KatexDirective));

    // verify
    expect(directives).toBeTruthy();
    expect(directives.length).toBe(3);
  });

  it('[0] should render x^2 successfully in HTML (default)', () => {
    // arrange
    const directives = fixture.debugElement.queryAll(By.directive(KatexDirective));
    const directive = directives[0].injector.get(KatexDirective) as KatexDirective;

    // verify
    expect(directives[0].nativeElement.innerText).toContain('x2');
    expect(directives[0].nativeElement.querySelector('math')).toBeFalsy();
    expect(directives[0].nativeElement.querySelector('.katex-mathml')).toBeFalsy();
    expect(directives[0].nativeElement.querySelector('.katex-html')).toBeTruthy();
    expect(directive.options).toBeFalsy();
  });

  it('[1] should render x^3 successfully in MathML', () => {
    // arrange
    const directives = fixture.debugElement.queryAll(By.directive(KatexDirective));
    const directive = directives[1].injector.get(KatexDirective) as KatexDirective;

    // verify
    expect(directives[1].nativeElement.innerText).toContain('x^3');
    expect(directives[1].nativeElement.querySelector('math')).toBeTruthy();
    expect(directives[1].nativeElement.querySelector('.katex-mathml')).toBeFalsy();
    expect(directives[1].nativeElement.querySelector('.katex-html')).toBeFalsy();
    expect(directive.options).toEqual(testComponent.options);
  });

  it('[2] should raise an error while parsing \\x^4', () => {
    expect(onErrorSpy).toHaveBeenCalledTimes(1);
  });
});
