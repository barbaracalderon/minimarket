import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../../cart/cart.service';
import { ProductService } from '../../../../shared/services/product.service';
import { IProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  providers: [CurrencyPipe],
})
export class ProductViewComponent implements OnInit {
  product!: IProduct;
  comments: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((product: IProduct) => {
    this.product = product as IProduct;

    });
  }

  addToCart(): void {
    this.cartService.addItem(this.product);
    alert('Produto adicionado ao carrinho!');
  }
}
