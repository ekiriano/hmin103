import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/Product";
import {CategorieService} from "../../../services/categorie.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: Observable<Product[]>;
  constructor(private  categorieService: CategorieService, private  productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
