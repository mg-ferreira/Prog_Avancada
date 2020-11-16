import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
  public estaCarregando: boolean = false;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup ({
      titulo: new FormControl (null, {validators: [Validators.required, Validators.minLength(3)]}),
      autor: new FormControl (null, {validators: [Validators.required, Validators.minLength(3)]}),
      paginas: new FormControl (null, {validators: [Validators.required]})
    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('idLivro')) {
        this.modo = "editar";
        this.idLivro = paramMap.get("idLivro");
        this.estaCarregando = true;
        this.livroService.getLivro(this.idLivro).subscribe( dadosLivro => {
          this.estaCarregando = false;
          this.livro = {
            id: dadosLivro._id,
            titulo: dadosLivro.titulo,
            autor: dadosLivro.autor,
            paginas: dadosLivro.paginas
          };
          this.form.setValue({
            titulo: this.livro.titulo,
            autor: this.livro.autor,
            paginas: this.livro.paginas
          })
        });
      }
      else {
        this.modo = "criar";
        this.idLivro = null;
      }
    });
  }

  constructor(public livroService: LivroService, public route: ActivatedRoute) {}

  onSalvarLivro(){
    if(this.form.invalid) {
      return;
    }
    this.estaCarregando = true;
    if(this.modo === "criar"){
      this.livroService.adicionarLivro(
        this.form.value.titulo,
        this.form.value.autor,
        this.form.value.paginas
      );
    }
    else {
      this.livroService.atualizarLivro(
        this.idLivro,
        this.form.value.titulo,
        this.form.value.autor,
        this.form.value.paginas
      )
    }

    this.form.reset();
  }
}
