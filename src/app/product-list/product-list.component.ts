import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  products = [...products];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.findAllProducts().subscribe(
      pruductData => {this.productList = pruductData}
    );
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
