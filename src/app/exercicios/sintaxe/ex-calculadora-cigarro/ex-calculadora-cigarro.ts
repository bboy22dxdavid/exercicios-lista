import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-ex-calculadora-cigarro',
  styleUrl: './ex-calculadora-cigarro.scss',
  templateUrl: './ex-calculadora-cigarro.html',
})
export class ExCalculadoraCigarro {
  valorCarteira: number = 0;
  qtdCarteira: number = 0;
  anos: number = 0;
  resultado: string = '';

  totalCigarroDia: number = 0;
  qtdCigarroCarteira: number = 20;
  totalCusto: number = 0;

  //METODO PARA REALIZAR CALCULOS
  Resultados() {
    if (this.valorCarteira <= 0 || this.qtdCarteira <= 0 || this.anos <= 0) {
      //debugando metodo
      console.log('Chamando o método para calcular o resultado!');
      this.resultado = 'Digite valores validos!';
    } else {
      this.totalCigarroDia = this.qtdCigarroCarteira * this.qtdCarteira;
      console.log(this.totalCigarroDia);

      this.totalCusto = this.qtdCarteira * 12 * this.valorCarteira * this.anos;
      console.log(this.totalCusto);

      this.resultado =
        'O preço de uma carteira de cigarro e: R$: ' + this.valorCarteira +
          '\n\nnº de cigarros fumados por dia: ' + this.totalCigarroDia +
          '\n\nValor gasto por um fumante em: ' + this.anos +
          '\n\n Anos:' +' e R$: ' + this.totalCusto;

    }

    // 2. Chama o método para limpar os campos automaticamente
    this.limparCampos();
  }

  // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
    console.log('Limpando os campos de digitação...');

    // Reseta apenas os inputs. O 'this.resultado' continua intacto!

    this.valorCarteira = 0;
    this.qtdCarteira = 0;
    this.anos = 0;
  }
}
