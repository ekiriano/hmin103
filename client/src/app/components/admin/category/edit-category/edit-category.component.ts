import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/Category';
import {CategorieService} from '../../../../services/categorie.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: Observable<Category>;
  name: any;
  constructor(private route: ActivatedRoute , private  categorieService: CategorieService) {
    this.name = this.route.snapshot.params.name;
    this.category = categorieService.getCategory(this.route.snapshot.params.name);

  }

  ngOnInit() {
  }

  onEdit(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    console.log('onEdit');
    this.categorieService.updateCategory(form, this.name);
  }

}
