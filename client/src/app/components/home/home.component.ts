import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../models/Category';
import {CategorieService} from '../../services/categorie.service';
import {Product} from '../../models/Product';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Observable<Category[]>;
  products: Observable<Product[]>;
  constructor(private  categorieService: CategorieService, private  productService: ProductService) { }

  ngOnInit() {
    this.categories =  this.categorieService.getCategories();
    this.products = this.productService.getProducts();
  }

}
