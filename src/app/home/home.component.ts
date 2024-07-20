import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    ProductCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  offers = [
    { image: 'assets/offer1.jpg' },
    { image: 'assets/offer2.jpg' },
    { image: 'assets/offer3.jpg' },
  ];

  bestSellers = [
    {
      name: 'Produto 1',
      image: 'assets/product1.jpg',
      description: 'Descrição do Produto 1',
      price: 100,
    },
    {
      name: 'Produto 2',
      image: 'assets/product2.jpg',
      description: 'Descrição do Produto 2',
      price: 70,
    },
    {
      name: 'Produto 3',
      image: 'assets/product3.jpg',
      description: 'Descrição do Produto 3',
      price: 25,
    },
  ];

  dailyDeals = [
    {
      name: 'Oferta 1',
      image: 'assets/deal1.jpg',
      description: 'Descrição da Oferta 1',
      price: 55,
    },
    {
      name: 'Oferta 2',
      image: 'assets/deal2.jpg',
      description: 'Descrição da Oferta 2',
      price: 53,
    },
    {
      name: 'Oferta 3',
      image: 'assets/deal3.jpg',
      description: 'Descrição da Oferta 3',
      price: 51,
    },
  ];
}
