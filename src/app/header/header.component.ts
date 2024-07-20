import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {
  cartItemCount: number = 0;

  constructor() {
    this.cartItemCount = 2; // Apenas um mock, pessoal, depois trocamos para a lógica mesmo :)
  }
}
