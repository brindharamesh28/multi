import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiselect13Component } from './multiselect13.component';

describe('Multiselect13Component', () => {
  let component: Multiselect13Component;
  let fixture: ComponentFixture<Multiselect13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiselect13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Multiselect13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
