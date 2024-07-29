import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartItem, CartService } from '../../../../shared/services/cart.service';
import { IProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CartItemComponent {
  @Input() item: ICartItem = {} as ICartItem;

  @Output() removeItem = new EventEmitter<IProduct>();

  constructor(private cartService: CartService) {}

  incrementQuantity() {
    this.cartService.addItem(this.item.product, 1);
  }

  decrementQuantity() {
    this.cartService.removeItem(this.item.product, 1);
  }

  removeFromCart() {
    this.removeItem.emit(this.item.product);
  }
}
