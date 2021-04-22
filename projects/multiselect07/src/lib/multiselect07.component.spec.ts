import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiselect07Component } from './multiselect07.component';

describe('Multiselect07Component', () => {
  let component: Multiselect07Component;
  let fixture: ComponentFixture<Multiselect07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiselect07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Multiselect07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
