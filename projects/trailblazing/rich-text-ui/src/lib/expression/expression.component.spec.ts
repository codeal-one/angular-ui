import { TestBed } from '@angular/core/testing';
import { ExpressionComponent } from './expression.component';
import { KatexDirective } from "../directives/katex.directive";


describe('ExpressionComponent', () => {
  let component: ExpressionComponent;

  beforeEach((done) => {
    // arrange
    TestBed.configureTestingModule({
      declarations: [
        KatexDirective,
        ExpressionComponent
      ]
    }).compileComponents().then(done);
  });

  it('should be created successfully', () => {
    // arrange
    const fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;

    // act
    fixture.detectChanges();

    // verify
    expect(component).toBeTruthy();
    expect(component.options).toBeFalsy();
    expect(component.error.observed).toBeFalsy();
  });

  it('should raise an error if the expression is invalid with output HTML (default)', () => {
    // arrange
    const fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    component.content = '\\x_2';
    const onErrorSpy = spyOn(component.error, 'emit').and.stub();

    // act
    fixture.detectChanges();

    // verify
    expect(onErrorSpy).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector('.has-error')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('.katex-mathml')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('math')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('.katex-html')).toBeFalsy();
  });

  it('should raise and show the error if the \'debug\' is true',  () => {
    // arrange
    const fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    component.content = '\\3^x';
    component.debug = true;
    const onErrorSpy = spyOn(component.error, 'emit').and.stub();

    // act
    fixture.detectChanges();

    // verify
    expect(onErrorSpy).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector('.has-error')).toBeTruthy();
  });

  it('should remove the \'has-error\' style when the error is fixed', () => {
    // arrange
    const fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    component.content = '\\Error_x';
    component.debug = true;
    component.options = { output: 'mathml' };

    // act
    fixture.detectChanges();

    // verify
    expect(fixture.nativeElement.querySelector('.has-error')).toBeTruthy();

    // re-arrange
    component.content = '\\Delta_x';

    // re-act
    fixture.detectChanges();

    // re-verify
    expect(fixture.nativeElement.querySelector('.has-error')).toBeFalsy();
  });

  it('should render only MathML (\'math\' tag) if the options contain "mathml"', () => {
    // arrange
    const fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    component.content = '\\Delta_x';
    component.options = { output: 'mathml' };

    // act
    fixture.detectChanges();

    // verify
    expect(fixture.nativeElement.querySelector('.katex-mathml')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('math')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.katex-html')).toBeFalsy();
  });
});
