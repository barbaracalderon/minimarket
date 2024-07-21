import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SearchResultComponent {
  searchResults: any[] = [];

  constructor(private productService: ProductService) {
    this.productService.searchResults$.subscribe((results: any[]) => {
      this.searchResults = results;
    });
  }
}
