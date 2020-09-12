import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TabelaCursosComponent,
    CadastroCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
