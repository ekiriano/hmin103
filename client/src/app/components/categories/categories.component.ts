import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/Category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[]
  constructor() { 
    
  }

  ngOnInit() {
    this.categories = [
      {
        id:1,
        title:"Planches de surf",
        image : "https://www.lab-boardstore.com/2720-large_default/planche-de-surf-quiksilver-mini-ripper.jpg",
        exerpt:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium quisquam, saepe laboriosam reiciendis in."
      },
      {
        id:2,
        title:"Wax",
        image : "https://i.ebayimg.com/images/g/AEcAAOSw4CFY50WY/s-l300.jpg",
        exerpt:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium quisquam, saepe laboriosam reiciendis in."
      },
      {
        id:3,
        title:"Habits",
        image : "https://st2.depositphotos.com/3396639/5664/i/950/depositphotos_56640145-stock-photo-portrait-of-hipster-guy-with.jpg",
        exerpt:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium quisquam, saepe laboriosam reiciendis in."
      },
      {
        id:4,
        title:"Accessoires",
        image : "http://www.surfshop.fr/c/50-prod_cat_list/accessoires-surf.jpg",
        exerpt:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium quisquam, saepe laboriosam reiciendis in."
      },
      {
        id:5,
        title:"Stickers",
        image : "https://cdn.shopify.com/s/files/1/1895/7913/products/surfing-stickers-1_2048x@2x.png?v=1564743761",
        exerpt:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium quisquam, saepe laboriosam reiciendis in."
      }
    ]
  }

}
