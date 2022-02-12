import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloneUiComponent } from './alone-ui.component';

describe('AloneUiComponent', () => {
  let component: AloneUiComponent;
  let fixture: ComponentFixture<AloneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloneUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
