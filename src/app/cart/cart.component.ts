import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CartItemComponent, CommonModule]
})
export class CartComponent {
  cartItems = [
    { imageUrl: 'assets/product1.jpg', name: 'Produto 1', quantity: 2, unitPrice: 50, total: 100 }, // Apenas mock, pessoal, alteramos depois
    { imageUrl: 'assets/product2.jpg', name: 'Produto 2', quantity: 1, unitPrice: 30, total: 30 } // Apenas mock, pessoal, alteramos depois
  ];
  shippingCost = 10;
  totalValue = 0;
  totalAmount = 0;

  constructor() {
    this.updateTotal();
  }

  updateTotal() {
    this.totalValue = this.cartItems.reduce((sum, item) => sum + item.total, 0);
    this.totalAmount = this.totalValue + this.shippingCost;
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.updateTotal();
  }
}
