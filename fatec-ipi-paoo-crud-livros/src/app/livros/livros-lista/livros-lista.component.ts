import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {
  @Input() livros: Livro[] = [];

  // livros = [
  //   {
  //     id: 1,
  //     titulo: 'Princípios do Angular',
  //     autor: 'Prof. Dr. André Bacchin',
  //     paginas: 246,
  //   },
  //   {
  //     id: 2,
  //     titulo: 'Clean Code',
  //     autor: 'Marchin T. Jhones',
  //     paginas: 338,
  //   },
  //   {
  //     id: 3,
  //     titulo: 'Estrutura de Dados',
  //     autor: 'Prof. Dra. Andrea Macchion',
  //     paginas: 74,
  //   },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
