import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUiComponent } from './one-ui.component';

describe('OneUiComponent', () => {
  let component: OneUiComponent;
  let fixture: ComponentFixture<OneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
