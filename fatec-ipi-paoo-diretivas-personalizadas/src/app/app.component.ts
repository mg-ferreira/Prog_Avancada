import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lembretes: Array <string> = [];
  lembrete: string;
  variavelSombra = '10px 10px green';
  variavelFundo = 'purple';

  salvar() {
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = "";
  }
}
