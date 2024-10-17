import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Categorias {
  [key: string]: string; 
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  categorias: Categorias = {
    organizacion: 'Organización',
    espiritu: 'Espíritu',
    historia: 'Historia',
    campismo: 'Campismo',
    biblioteca: 'Biblioteca'
  };

  categoriasKeys = Object.keys(this.categorias); 
}