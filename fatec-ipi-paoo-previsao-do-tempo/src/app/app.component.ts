import { Component } from '@angular/core';
import { Previsao } from '../app/model/previsao';
import { PrevisoesService } from './previsoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string;
  previsoes: Previsao[];

  constructor(private previsoesService: PrevisoesService) {
    // previsoesService.obterPrevisoes(this.city).subscribe((previsoes) => {
    //   this.previsoes = previsoes['list'];
    //   console.log(this.previsoes);
    // });
  }

  onCidadePesquisada(cidade) {
    this.city = cidade;
    console.log(this.city);
    this.previsoesService.obterPrevisoes(this.city).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }
}
