import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiselect28Component } from './multiselect28.component';

describe('Multiselect28Component', () => {
  let component: Multiselect28Component;
  let fixture: ComponentFixture<Multiselect28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiselect28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Multiselect28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
