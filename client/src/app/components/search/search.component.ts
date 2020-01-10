import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title = 'Angular Search Products';
    searchText;
    products = [
      { id: 11, name: 'Skateboard'},
      { id: 12, name: 'Surfboard'},
      { id: 13, name: 'Basketball'},
      { id: 14, name: 'Ski shit'},
      { id: 15, name: 'alteres'},
      { id: 16, name: 'poids'},
      { id: 17, name: 'poulet halal'},
      { id: 18, name: 'Dr IQ'},
      { id: 19, name: 'shorts'},
      { id: 20, name: 'jerseys'}
    ];

}
