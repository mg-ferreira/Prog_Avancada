import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cidade-busca',
  templateUrl: './cidade-busca.component.html',
  styleUrls: ['./cidade-busca.component.css']
})
export class CidadeBuscaComponent {
  @Output() cidadePesquisada = new EventEmitter<string>();
  cidade: string;
  onBuscarCidade () {
    this.cidadePesquisada.emit(this.filtra_pesquisa(this.cidade));
  }

  private filtra_pesquisa(str: string) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    str = str.replace(/ /g, '+');
    str = str.toLowerCase();
    return str;
  }
}
