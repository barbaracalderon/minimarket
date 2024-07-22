import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCardComponent } from '../products/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ProductCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchQuery: string = '';

  products!: IProduct[];
  offers!: IProduct[];
  bestSellers!: IProduct[];
  dailyDeals!: IProduct[];

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products as IProduct[];
      this.offers = this.products.slice(0, 3); // productService.getOffers();
      this.bestSellers = this.products.slice(0, 5); //this.productService.getBestSellers();
      this.dailyDeals = this.products.slice(1, 5); //this.productService.getDailyDeals(); */
    });
  }
}
