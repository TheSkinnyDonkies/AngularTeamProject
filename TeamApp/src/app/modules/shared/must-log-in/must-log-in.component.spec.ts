/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MustLogInComponent } from './must-log-in.component';

describe('MustLogInComponent', () => {
  let component: MustLogInComponent;
  let fixture: ComponentFixture<MustLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
