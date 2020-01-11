import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

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
    return this.http.post('/api/categories', todo);
  }

  deleteCategory(id: string) {
    // @ts-ignore
    return this.http.delete('/api/categories', id);
  }

}
