import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit, OnDestroy {
  livros: Livro[] = [];
  private livrosSubscription: Subscription;
  public estaCarregando: boolean = false;

  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
    this.estaCarregando = true;
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService.getListaDeLivrosAtualizadaObservable().subscribe(
      (livros: Livro[]) => {
        this.estaCarregando = false;
        this.livros = livros;
      });
  }

  onDelete(id: string) {
    this.livroService.removerLivro(id);
  }

  ngOnDestroy(): void {
    this.livrosSubscription.unsubscribe();
  }
}
