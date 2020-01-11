import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  getCategory(name): Observable<Category> {
    return this.http.get<Category>('/api/categories/' + name);
  }
  createCategory(data: any) {
    const todo = {
      name: data.value.name ,
      description: data.value.description
    };
    console.log(todo);
    this.http.post('/api/categories', todo).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/categories']);
  }

  deleteCategory(id: string) {
    // @ts-ignore
    this.http.delete('/api/categories', id).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/categories']);
  }

}
