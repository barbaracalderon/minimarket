import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../core/models/product.model';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = [];
  private productsUrl = '/assets/productDB.json';
  private productsLoaded = new BehaviorSubject<boolean>(false);

  private searchResults = new BehaviorSubject<IProduct[]>([]);
  searchResults$ = this.searchResults.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get<IProduct[]>(this.productsUrl).subscribe((data) => {
      this.products = data;
      this.productsLoaded.next(true);
    });
  }

  getProducts(): Observable<IProduct[]> {
    return this.productsLoaded.pipe(
      filter((loaded) => loaded), // wait for products to load
      map(() => this.products)
    );
  }

  getProductsByPromotionalOffers(): Observable<IProduct[]> {
    return this.productsLoaded.pipe(
      filter((loaded) => loaded), // wait for products to load
      map(() => this.products.slice(5, 12))
    );
  }

  getProductsByMostSold(period: number): Observable<IProduct[]> {
    //do some magic in the future with the period parameter
    return this.productsLoaded.pipe(
      filter((loaded) => loaded), // wait for products to load
      map(() => this.products.slice(Math.floor(Math.random() * 5) + 1, period))
    );
  }

  getProductById(id: number): Observable<IProduct> {
    return this.productsLoaded.pipe(
      filter((loaded) => loaded), // Wait until products are loaded
      map(() => this.products.find((product) => product.id === id))
    );
  }

  getProductsByDescription(query: string) {
    this.productsLoaded
      .pipe(
        filter((loaded) => loaded),
        tap(() => {
          const results = this.products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          this.searchResults.next(results);
        })
      )
      .subscribe();
  }
}
