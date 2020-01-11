import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminPanelComponent } from './category-admin-panel.component';

describe('CategoryAdminPanelComponent', () => {
  let component: CategoryAdminPanelComponent;
  let fixture: ComponentFixture<CategoryAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
