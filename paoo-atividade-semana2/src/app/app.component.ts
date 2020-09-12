import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() curso;
  cursos = [
    {nome: "Análise e Desenvolvimento de Sistemas", turno: "Vespertino"},
    {nome: "Análise e Desenvolvimento de Sistemas", turno: "Noturno"},
    {nome: "Eventos", turno: "Matutino"},
    {nome: "Gestão Comercial", turno: "Matutino"},
    {nome: "Gestão Comercial", turno: "Noturno"},
    {nome: "Recursos Humanos", turno: "Noturno"},
    {nome: "Gestão Emprsarial", turno: "EAD"},
  ];

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }

}
