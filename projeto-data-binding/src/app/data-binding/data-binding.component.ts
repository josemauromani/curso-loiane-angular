import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImagem: String = 'http://lorempixel.com/400/200/city/';
  cursoAngular: boolean = true;
  valorAtual: string = ''
  valorSalvo: string;
  isMouseOver: boolean = false;
  nome: String = 'abc'; 

  valorInicial: number = 15;

  nomeDoCurso: string = 'Curso de Angular';

  pessoa: any  = {
    nome:'Jose',
    idade:38
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  botaoClicado() {
    alert('clicou');
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
