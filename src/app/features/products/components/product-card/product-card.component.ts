import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { IProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [CurrencyPipe],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  constructor(private router: Router) {}

  viewProduct() {
    this.router.navigate(['/product', this.product.id]);
  }
}
