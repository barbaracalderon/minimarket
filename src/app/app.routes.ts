import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductViewComponent },
];
