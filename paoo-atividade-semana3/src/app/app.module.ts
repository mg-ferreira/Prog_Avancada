import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { FormsModule } from '@angular/forms';
import { TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TabelaCursosComponent,
    CadastroCursoComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
