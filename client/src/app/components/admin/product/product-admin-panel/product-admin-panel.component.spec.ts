import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminPanelComponent } from './product-admin-panel.component';

describe('ProductAdminPanelComponent', () => {
  let component: ProductAdminPanelComponent;
  let fixture: ComponentFixture<ProductAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
