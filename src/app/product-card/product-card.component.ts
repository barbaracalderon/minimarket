import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [CurrencyPipe],
})
export class ProductCardComponent {
  @Input() product!: { name: string; image: string; price: number };
}
