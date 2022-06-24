import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  items = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.addToCart(products[0]);
    this.items = this.cartService.getItems().length;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
