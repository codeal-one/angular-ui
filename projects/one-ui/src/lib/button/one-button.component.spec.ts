import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneButtonComponent } from './one-button.component';

describe('OneButtonComponent', () => {
  let component: OneButtonComponent;
  let fixture: ComponentFixture<OneButtonComponent>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create as primary', () => {
    component.primary = true;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(button.innerText).toContain('Button');
  });
});
