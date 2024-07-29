import { Component, OnInit } from '@angular/core';
import { CartService, ICartItem } from '../../shared/services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { IProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CartItemComponent, CommonModule, RouterLink],
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = [];
  shippingCost = 10;
  totalValue = 0;
  totalAmount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.updateTotal();
    });
  }
  updateTotal() {
    this.totalValue = this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    );
    this.totalAmount = this.totalValue + this.shippingCost;
  }

  removeFromCart(item: IProduct) {
    console.log('removeFromCart', item);
    
    let cartItem = this.cartItems.find((i) => i.product === item);
    if (cartItem) {
      this.cartService.removeItem(item, cartItem.quantity);
    }
    this.updateTotal();
  }
}
