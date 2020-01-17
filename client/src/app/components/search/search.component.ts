import { Component } from '@angular/core';
import { Product } from '../../models/product'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private productsUrl = "http://localhost:4200/api/products";

  title = 'Angular Search Products';
    // searchText;
    products = [
      {name: 'Skateboard', price: '15'},
      {name: 'Surfboard', price: '23'},
      {name: 'Basketball', price: '10'},
      {name: 'Ski material', price: '200'},
      {name: 'alteres', price: '15'},
      {name: 'poids', price: '15'},
      {name: 'baseball', price: '25'},
      {name: 'hockey', price: '30'},
      {name: 'shorts', price: '40'},
      {name: 'jerseys', price: '80'}
    ];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(this.productsUrl)
                 .subscribe(response => {
                   this.products = response.data;
                 });
    }

}
