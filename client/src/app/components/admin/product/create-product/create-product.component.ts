import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/Category';
import {CategorieService} from '../../../../services/categorie.service';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private  categorieService: CategorieService , private productService: ProductService) {
    this.categories = categorieService.getCategories();
  }

  ngOnInit() {
  }

  onCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.productService.createProduct(form);
  }
}
