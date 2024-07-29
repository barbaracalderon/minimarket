import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductViewComponent } from './features/products/components/product-view/product-view.component';
import { CartComponent } from './features/cart/cart.component';
import { SearchResultComponent } from './features/search-result/search-result.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'search', component: SearchResultComponent },
];
