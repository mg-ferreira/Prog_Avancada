import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector:'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
export class LivrosInserirComponent implements OnInit {

  private modo: string = "criar";
  private idLivro: string;
  public livro: Livro;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('idLivro')) {
        this.modo = "editar";
        this.idLivro = paramMap.get("idLivro");
        this.livroService.getLivro(this.idLivro).subscribe( dadosLivro => {
          this.livro = {
            id: dadosLivro._id,
            titulo: dadosLivro.titulo,
            autor: dadosLivro.autor,
            paginas: dadosLivro.paginas
          };
        });
      }
      else {
        this.modo = "criar";
        this.idLivro = null;
      }
    });
  }

  constructor(public livroService: LivroService, public route: ActivatedRoute) {}

  onSalvarLivro(form: NgForm){
    if(form.invalid) {
      return;
    }
    if(this.modo === "criar"){
      this.livroService.adicionarLivro(
        form.value.titulo,
        form.value.autor,
        form.value.paginas
      );
    }
    else {
      this.livroService.atualizarLivro(
        this.idLivro,
        form.value.titulo,
        form.value.autor,
        form.value.paginas
      )
    }

    form.resetForm();
  }
}
