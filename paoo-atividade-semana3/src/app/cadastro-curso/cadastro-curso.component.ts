import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent {
  @Output() cursoAdicionado = new EventEmitter();


  adicionar(nome, turno) {
    const curso = {
      nome: nome,
      turno: turno
    };
    this.cursoAdicionado.emit(curso);
  }

  obterEstiloParaOBotao() {
    return {
      backgroundColor: '#CCC',
      width: '300px',
      padding: '8px',
      border: 'solid 1px navy',
      borderRadius: '8px',
    }
  }

}
