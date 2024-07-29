import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../core/models/product.model';

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<ICartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() { }

  getCartItemCount(): number {
    return this.cartItems.getValue().length;
  }

  addItem(item: IProduct, quantity: number): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(cartItem => cartItem.product.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.next([...currentItems, { product: item, quantity }]);
    }
  }

  removeItem(item: IProduct, quantity: number): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(cartItem => cartItem.product.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > quantity) {
        existingItem.quantity -= quantity;
      } else {
        this.cartItems.next(currentItems.filter(cartItem => cartItem.product.id !== item.id));
      }
    }
  }
}
