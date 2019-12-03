import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPartialComponent } from './nav-partial.component';

describe('NavPartialComponent', () => {
  let component: NavPartialComponent;
  let fixture: ComponentFixture<NavPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
