import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() { }

  getCartItemCount(): number {
    return this.cartItems.getValue().length;
  }

  addItem(item: any): void {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);
  }

  removeItem(itemId: number): void {
    const currentItems = this.cartItems.getValue().filter(item => item.id !== itemId);
    this.cartItems.next(currentItems);
  }

}
