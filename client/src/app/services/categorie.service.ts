import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private router: Router) {}

  getCategories(): Observable<Category[]> {
   return this.http.get<Category[]>('/api/categories');
  }

  getCategory(name) {
    return this.http.get<Category>('/api/categories/' + name);
  }
  createCategory(data: any) {
    const category = {
      name: data.value.name ,
      description: data.value.description,
      image: data.value.image
    };
    this.http.post('/api/categories', category).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/categories']);
  }

  updateCategory(data: any, name) {
    console.log('onEdit');
    const category = {
      name: data.value.name,
      description: data.value.description,
      image: data.value.image
    };
    this.http.put('/api/categories/' + name, category).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/categories']);
  }

  // tslint:disable-next-line:variable-name
  deleteCategory(c_id: string) {
    // @ts-ignore
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: c_id
      },
    };
    this.http.delete('/api/categories', options).subscribe(response => {
      console.log(response);
    });
    // todo : delete the category from object without refreshing
    this.router.navigate(['/admin/dashboard/categories']);
  }

}
