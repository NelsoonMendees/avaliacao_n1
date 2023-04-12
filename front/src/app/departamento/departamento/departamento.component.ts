import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit{
  lista: Departamento[] = [];
  obj: Departamento = new Departamento();
  mens = '';

  constructor(private api: DepartamentoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.api
      .consultar()
      .toPromise()
      .then((res: any) => {
        this.lista = res;
      });
  }

  adicionar() {
    this.api
      .adicionar(this.obj)
      .toPromise()
      .then((departamento) => {
        this.mens = departamento?.nome + ' foi adicionado com sucesso!';
        this.consultar();
      });
  }

  excluir() {
    this.api
      .excluir(this.obj.id)
      .toPromise()
      .then((departamento) => {
        (this.mens = 'Pessoa excluida com sucesso!'), this.consultar();
      });
  }

  alterar() {
    this.api
      .alterar(this.obj.id, this.obj)
      .toPromise()
      .then((departamento) => {
        this.mens = departamento.nome + ' alterado com sucesso!';
        this.consultar();
      });
  }

  carregarDados(p: Departamento) {
    this.obj = p;
  }

}
