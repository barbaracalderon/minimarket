import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: true
})
export class CartItemComponent {
  @Input() product!: { imageUrl: string, name: string, quantity: number, unitPrice: number, total: number };
  @Output() quantityChanged = new EventEmitter<number>();
  @Output() itemRemoved = new EventEmitter<void>();

  incrementQuantity() {
    if (this.product.quantity < 99) {
      this.product.quantity++;
      this.product.total = this.product.unitPrice * this.product.quantity;
      this.quantityChanged.emit(this.product.quantity);
    }
  }

  decrementQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
      this.product.total = this.product.unitPrice * this.product.quantity;
      this.quantityChanged.emit(this.product.quantity);
    }
  }

  removeItem() {
    this.itemRemoved.emit();
  }
}
