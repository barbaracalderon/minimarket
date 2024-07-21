import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../features/cart/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  noResults: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.productService.searchResults$.subscribe((results: any[]) => {
      this.searchResults = results;
      this.noResults = results.length === 0;
    });
  }

  get cartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      this.productService.searchProducts(this.searchQuery);
      this.router.navigate(['/search']);
    }
  }
}
