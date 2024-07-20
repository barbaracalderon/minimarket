import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CartItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<void>();

  incrementQuantity() {
    if (this.item.quantity < 10) {
      this.item.quantity++;
      this.item.total = this.item.unitPrice * this.item.quantity;
    }
  }

  decrementQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.item.total = this.item.unitPrice * this.item.quantity;
    }
  }

  removeFromCart() {
    this.remove.emit();
  }
}
