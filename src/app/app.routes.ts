import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './features/products/components/product-view/product-view.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductViewComponent },
];
