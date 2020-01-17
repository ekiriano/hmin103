import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Observable<Product>;
  constructor(private productService: ProductService, private route: ActivatedRoute ) {
    this.product = this.productService.getProduct(this.route.snapshot.params.name);
  }

  ngOnInit() {
    console.log(this.product);
  }

}
