import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TabelaCursosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
