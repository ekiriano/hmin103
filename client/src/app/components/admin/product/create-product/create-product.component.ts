import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/Category';
import {CategorieService} from '../../../../services/categorie.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private  categorieService: CategorieService) {
    this.categories = categorieService.getCategories();
  }

  ngOnInit() {
  }

  onCreate(createCategory: NgForm) {

  }
}
