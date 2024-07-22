import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = [];
  private productsUrl = '/assets/productDB.json';

  constructor(private http: HttpClient ) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.productsUrl}/${id}`);
  }

  ngOnInit(): void {
    
  }

  private searchResults = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResults.asObservable();

  searchProducts(query: string) {
    const results = this.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    this.searchResults.next(results);
  }
}
