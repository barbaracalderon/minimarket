// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatGridListModule],
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
    },
    {
      name: 'Produto 2',
      image: 'assets/product2.jpg',
      description: 'Descrição do Produto 2',
    },
    {
      name: 'Produto 3',
      image: 'assets/product3.jpg',
      description: 'Descrição do Produto 3',
    },
  ];

  dailyDeals = [
    {
      name: 'Oferta 1',
      image: 'assets/deal1.jpg',
      description: 'Descrição da Oferta 1',
    },
    {
      name: 'Oferta 2',
      image: 'assets/deal2.jpg',
      description: 'Descrição da Oferta 2',
    },
    {
      name: 'Oferta 3',
      image: 'assets/deal3.jpg',
      description: 'Descrição da Oferta 3',
    },
  ];
}
