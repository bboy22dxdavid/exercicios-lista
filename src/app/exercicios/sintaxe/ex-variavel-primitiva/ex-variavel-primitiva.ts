import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-ex-variavel-primitiva',
  styleUrl: './ex-variavel-primitiva.scss',
  templateUrl: './ex-variavel-primitiva.html',
})
export class ExVariavelPrimitiva {
  //variaveis para receber os dados dos inputs
  nome: string = '';
  endereco: string = '';
  salario: number = 0;

  resultado: string = '';

    //metodo para receber e validar os dados
  Resultados() {
       //iniciando condicao para validar os inputs
    if (this.nome != null && this.endereco != null && this.salario != null) {
      this.resultado =
        'EU ' +
        this.nome +
        ', morando no endereço:' +
        this.endereco +
        ',' +
        'confirmo que recebi o salario de R$: ' +
        this.salario;

        this.limparCampos();
    } else {
      this.resultado = 'Erro ao receber os dados! ';
    }
  }
  // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
     console.log('Limpando os campos de digitação...');

    // Reseta apenas os inputs. O 'this.resultado' continua intacto!
    this.nome = '';
    this.endereco = '';
    this.salario = 0;
  }
}
