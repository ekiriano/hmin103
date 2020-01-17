import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product>
  constructor(private categorieService: CategorieService, private  productService: ProductService) {
    // this.products = categorieService.
  }

  ngOnInit() {
  }

}
