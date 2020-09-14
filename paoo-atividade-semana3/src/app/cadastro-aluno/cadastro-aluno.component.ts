import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  //@Output() alunoMatriculado = new EventEmitter();

  alunos = [
    {nome: 'Maria da Silva', idade: 26, email: 'maria.silva@mail.com', curso: 'Recursos Humanos (Noturno)'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome, idade, email, curso) {
    const aluno = {
      nome: nome,
      idade: idade,
      email: email,
      curso: curso
    }
    /*this.alunoMatriculado.emit(aluno);*/
    this.alunos = [aluno, ...this.alunos];
  }
}
