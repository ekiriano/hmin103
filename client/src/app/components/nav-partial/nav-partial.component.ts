import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {Category} from '../../models/Category';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-partial',
  templateUrl: './nav-partial.component.html',
  styleUrls: ['./nav-partial.component.css']
})
export class NavPartialComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private  categorieService: CategorieService) { }

  ngOnInit() {
    this.categories =  this.categorieService.getCategories();
    console.log(this.categories);
  }

}
