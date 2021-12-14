import { KatexService } from "./katex.service";
import { TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";


@Component({
  template: ``
})
class TestKatexServiceComponent { }

describe('KatexService', () => {
  let service: KatexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestKatexServiceComponent],
      providers: [KatexService]
    });
    service = TestBed.inject(KatexService);
  });

  it('should be created successfully', () => {
    // verify
    expect(service).toBeTruthy();
  });

  it('should raise error when rendering to a null element', () => {
    // arrange
    const fixture = TestBed.createComponent(TestKatexServiceComponent);
    const element = fixture.debugElement;
    const expression = 'x^2';

    // act
    service.render(expression, element, {});

    // verify
    expect(element.nativeElement.querySelector('.katex')).toBeTruthy();
    expect(element.nativeElement.querySelector('.katex .katex-mathml')).toBeTruthy();
    expect(element.nativeElement.querySelector('.katex .katex-mathml').innerText).toBe('x^2');
    expect(element.nativeElement.querySelector('.katex .katex-html')).toBeTruthy();
    expect(element.nativeElement.querySelector('.katex .katex-html').innerText).toBe('x2');
  });

  it('should render a trivial expression to string correctly with default options', () => {
    // arrange
    const expression = 'x^2';

    // act
    const ret = service.renderToString(expression);

    // verify
    expect(ret).toContain('x^2');
    expect(ret).toContain('<mi>x</mi>');
    expect(ret).toContain('<mn>2</mn>');
  });
});
