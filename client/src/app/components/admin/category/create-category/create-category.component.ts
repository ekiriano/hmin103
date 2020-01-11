import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategorieService} from '../../../../services/categorie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private  categorieService: CategorieService ) { }

  ngOnInit() {
  }

  onCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.categorieService.createCategory(form);

  }

}
