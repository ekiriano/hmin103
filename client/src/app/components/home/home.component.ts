import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../models/Category';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Observable<Category[]>;
  constructor(private  categorieService: CategorieService) { }

  ngOnInit() {
    this.categories =  this.categorieService.getCategories();
  }

}
