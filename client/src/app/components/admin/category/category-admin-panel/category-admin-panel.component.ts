import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/Category';
import {CategorieService} from '../../../../services/categorie.service';

@Component({
  selector: 'app-category-admin-panel',
  templateUrl: './category-admin-panel.component.html',
  styleUrls: ['./category-admin-panel.component.css']
})
export class CategoryAdminPanelComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private  categorieService: CategorieService) {
    this.categories =  this.categorieService.getCategories();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:variable-name
  onDelete(id: string) {
    this.categorieService.deleteCategory(id);
  }
}
