import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../../models/Product';
import {ProductService} from '../../../../services/product.service';
@Component({
  selector: 'app-product-admin-panel',
  templateUrl: './product-admin-panel.component.html',
  styleUrls: ['./product-admin-panel.component.css']
})
export class ProductAdminPanelComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:variable-name
  onDelete(_id: any) {

  }
}
