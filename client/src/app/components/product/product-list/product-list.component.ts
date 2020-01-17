import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  categorie: Observable<Category>;
  constructor(private route: ActivatedRoute, private categorieService: CategorieService, private  productService: ProductService) {
    console.log(this.route.snapshot.params.name);
    this.categorie = categorieService.getCategory(this.route.snapshot.params.name);
    this.products = categorieService.getProductsOfCategory(this.route.snapshot.params.name);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.name);
  }

}
