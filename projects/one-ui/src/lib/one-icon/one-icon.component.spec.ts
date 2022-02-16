import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneIconComponent } from './one-icon.component';

describe('OneIconComponent', () => {
  let component: OneIconComponent;
  let fixture: ComponentFixture<OneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneIconComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with a Font-Awesome icon', () => {
    component.faIcon = 'close';
    component.ngOnChanges();

    expect(component).toBeTruthy();
  });
});
