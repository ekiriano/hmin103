import { Component } from '@angular/core';
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
      { id: 11, name: 'Skateboard', price: '15'},
      { id: 12, name: 'Surfboard', price: '15'},
      { id: 13, name: 'Basketball', price: '15'},
      { id: 14, name: 'Ski shit', price: '15'},
      { id: 15, name: 'alteres', price: '15'},
      { id: 16, name: 'poids', price: '15'},
      { id: 17, name: 'poulet halal', price: '15'},
      { id: 18, name: 'Dr IQ', price: '15'},
      { id: 19, name: 'shorts', price: '15'},
      { id: 20, name: 'jerseys', price: '15'}
    ];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(this.productsUrl)
                 .subscribe(response => {
                   this.products = response.data;
                 });
    }

}
