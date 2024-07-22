import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../products/components/product-card/product-card.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  imports: [CommonModule, ProductCardComponent],
  standalone: true,
})
export class SearchResultComponent {
  searchResults: any[] = [];
  noResults: boolean = false;
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productService.searchResults$.subscribe((results) => {
      this.searchResults = results;
      this.noResults = results.length === 0;
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      if (this.searchQuery.trim()) {
        this.productService.searchProducts(this.searchQuery);
      }
    });
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
