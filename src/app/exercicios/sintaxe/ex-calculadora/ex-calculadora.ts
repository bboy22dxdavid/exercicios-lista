import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-ex-calculadora',
  styleUrl: './ex-calculadora.scss',
  templateUrl: './ex-calculadora.html',
})
export class ExCalculadora {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  produto: number = 0;
  quociente: number = 0;
  resto: number = 0;

  //METODO PARA REALIZAR CALCULOS
  calcularResultados() {
    if (this.numero1 === 0) {
      console.error('Erro: Divisão por zero não é permitida.');
      return;
    }
    //realizar a operação para definir o produto
    this.produto = this.numero1 * this.numero2;

    //realizar a operação para definir o coeficiente
    this.quociente = Math.trunc(this.numero1 / this.numero2);
    //realizar a operação para definir o coeficiente
    this.resto =this.numero1  %  this.numero2;

    //instanciando as variaveis para realizar a operação
    this.resultado = this.numero1 + this.numero2;

    // 2. Chama o método para limpar os campos automaticamente
    this.limparCampos();
  }

  // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
    console.log('Limpando os campos de digitação...');

    // Reseta apenas os inputs. O 'this.resultado' continua intacto!
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
