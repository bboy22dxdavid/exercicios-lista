import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-ex-triangulos',
  styleUrl: './ex-triangulos.scss',
  templateUrl: './ex-triangulos.html',
})
export class ExTriangulos {

  numeroX: number = 0;
  numeroY : number = 0;
  numeroZ: number = 0;
  resultado: string = '';

  calcularResultados(){

    const a = this.numeroX;
    const b = this.numeroY;
    const c = this.numeroZ;

    if(a + b > c && a + c > b && b + c > a){
      this.resultado = "É um triângulo.";

     if(a == b && b == c){
      this.resultado = "É um triângulo Equilátero.";
    }
     else if(a == b || a == c || b == c){
      this.resultado = "É um triângulo Isósceles (dois lados iguais).";
     } else {
      this.resultado = "É um triângulo Escaleno (todos os lados diferentes).";
     }
    }else{
      this.resultado = "Essas medidas não formam um triângulo.";
    }

    this.numeroX = 0;
    this.numeroY = 0;
    this.numeroZ = 0;

  }

}
