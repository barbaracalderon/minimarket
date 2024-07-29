import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../../cart/cart.service';
import { ProductService, CommentService } from '../../../../shared/services/';
import { IProduct } from '../../../../core/models/product.model';
import { IComment } from '../../../../core/models/comment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  providers: [CurrencyPipe],
})
export class ProductViewComponent implements OnInit {
  product!: IProduct;
  comments$: Observable<IComment[]> = new Observable<IComment[]>();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private commentService: CommentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProductById(productId)
      .subscribe((product: IProduct) => {
        this.product = product as IProduct;
      });
    this.comments$ = this.commentService.getCommentsByProductId(productId);
  }

  addToCart(): void {
    this.cartService.addItem(this.product);
    this.router.navigate(['/cart']);
  }
}
