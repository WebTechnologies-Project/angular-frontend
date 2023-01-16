/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalComponent } from './tal.component';

describe('TalComponent', () => {
  let component: TalComponent;
  let fixture: ComponentFixture<TalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
