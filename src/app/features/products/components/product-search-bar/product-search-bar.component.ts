import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.scss',
})
export class ProductSearchBarComponent {
  @Output() searchQuery: string = '';

  constructor(private router: Router) {}

  productSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery },
      });
    }
  }
}
