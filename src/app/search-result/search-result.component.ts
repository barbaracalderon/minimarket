import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SearchResultComponent {
  searchResults: any[] = [];
  noResults: boolean = false;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.searchResults$.subscribe(results => {
      this.searchResults = results;
      this.noResults = results.length === 0;
    });
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
