import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  getProduct(name) {
    return this.http.get<Product>('/api/products/' + name);
  }

  createProduct(data: any) {
    const product = {
      image: data.value.image,
      category: data.value.category_id,
      name: data.value.name,
      brand: data.value.brand,
      price: data.value.price,
      description: data.value.description,
    };
    this.http.post('/api/products', product).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/products']);
  }

  updateProduct(data: any, name) {
    const product = {
      image: data.value.image,
      category: data.value.category_id,
      name: data.value.name,
      brand: data.value.brand,
      price: data.value.price,
      description: data.value.description,
    };

    this.router.navigate(['/admin/dashboard/products']);
  }

  deleteProduct(p_id: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: p_id
      },
    };
    this.http.delete('/api.products', options).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/admin/dashboard/products']);
  }

}
