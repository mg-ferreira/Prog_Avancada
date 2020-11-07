import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  constructor(private httpClient: HttpClient) {

  }

  getLivro(idLivro: string) {
    return this.httpClient.get<{_id: string, titulo: string, autor: string, paginas: number}>(`http://localhost:3000/api/livros/${idLivro}`);
  }

  getLivros(): void {
    this.httpClient.get<{mensagem: string, livros: any}>('http://localhost:3000/api/livros')
    .pipe(map((dados) => {
      return dados.livros.map(livro => {
        return {
          id: livro._id,
          titulo: livro.titulo,
          autor: livro.autor,
          paginas: livro.paginas
        }
      })
    }))
    .subscribe(
      (livros) => {
        this.livros = livros;
        this.listaLivrosAtualizada.next([...this.livros]);
      }
    )
  }

  adicionarLivro(titulo: string, autor: string, paginas: number) {
    const livro: Livro = {
      id: null,
      titulo: titulo,
      autor: autor,
      paginas: paginas,
    };
    this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/livros', livro).subscribe(
      (dados) => {
        livro.id = dados.id;
        this.livros.push(livro);
        this.listaLivrosAtualizada.next([...this.livros]);
      }
    )
  }

  atualizarLivro(id: string, titulo: string, autor: string, paginas: number) {
    const livro: Livro = {id, titulo, autor, paginas};
    this.httpClient.put(`http://localhost:3000/api/livros/${id}`, livro)
    .subscribe(res => {
      const copia = [...this.livros];
      const indice = copia.findIndex(lib => lib.id === livro.id);
      copia[indice] = livro;
      this.livros = copia;
      this.listaLivrosAtualizada.next([...this.livros]);
    });
  }

  removerLivro(id: string):void {
    this.httpClient.delete(`http://localhost:3000/api/livros/${id}`)
    .subscribe(() => {
      this.livros = this.livros.filter((lib) => {
        return lib.id !== id
      });
      this.listaLivrosAtualizada.next([...this.livros]);
    });
  }

  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }
}
