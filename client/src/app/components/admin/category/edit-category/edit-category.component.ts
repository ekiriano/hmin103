import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: Observable<Category>;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  onEdit(data) {

  }

}
