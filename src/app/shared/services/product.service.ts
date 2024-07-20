import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Produto 1', description: 'O primeiro produto da lojinha', price: 100, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Produto 2', description: 'O segundo produto da lojinha', price: 70, imageUrl: 'assets/product2.jpg' },
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
