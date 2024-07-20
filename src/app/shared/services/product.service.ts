import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Café', description: 'Café forte', price: 10 },
    { id: 2, name: 'Açúcar', description: 'Açúcar refinado', price: 5 },
  ];
  
  private searchResults = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResults.asObservable();

  constructor() { }

  searchProducts(query: string) {
    const results = this.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    this.searchResults.next(results);
  }
}
