import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CartItemComponent, CommonModule, RouterLink]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  shippingCost = 10;
  totalValue = 0;
  totalAmount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  updateTotal() {
    this.totalValue = this.cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    this.totalAmount = this.totalValue + this.shippingCost;
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.updateTotal();
  }
  
}
