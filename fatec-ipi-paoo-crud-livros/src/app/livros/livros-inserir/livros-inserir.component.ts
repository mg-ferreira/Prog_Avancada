import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';
@Component({
  selector:'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
export class LivrosInserirComponent {
  @Output() livroAdicionado = new EventEmitter<Livro>();
  id: number;
  titulo: string;
  autor: string;
  paginas: number;

  onAdicionarLivro(){
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
    };
    this.livroAdicionado.emit(livro);
  }

}
