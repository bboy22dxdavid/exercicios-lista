import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-ex-sucessor',
  styleUrl: './ex-sucessor.scss',
  templateUrl: './ex-sucessor.html',
})
export class ExSucessor {
   // Criamos um grupo de formulário
   formSucessor!: FormGroup;

   // Apenas a variável de resultado continua solta para exibição
    resultado: string  = '';

    // Injetamos o FormBuilder no construtor
    constructor(private fb: FormBuilder) {}

     ngOnInit() {
    // Inicializamos o formulário definindo o campo 'numero' como obrigatório
    this.formSucessor = this.fb.group({
      numero: [null, [Validators.required, Validators.min(0)]]
    });
  }

   // MÉTODO PARA REALIZAR CÁLCULOS
  Resultados() {
    console.log('Chamando o método para calcular o resultado!');

    // Segurança: só executa se o formulário for totalmente válido
    if (this.formSucessor.valid) {
      // Pegamos o valor diretamente do formulário
      const numer = this.formSucessor.value.numero;
      const sucessor = numer + 1;

      this.resultado = `O sucessor de ${numer} é: ${sucessor}`;

      // Chama o método para limpar o campo automaticamente
      this.limparCampos();
    }
  }

    // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
    console.log('Limpando os campos de digitação...');

    // O .reset() limpa o valor e zera o estado de "tocado" do input
    this.formSucessor.reset();
  }
}
