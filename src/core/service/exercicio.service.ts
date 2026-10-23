import { Injectable } from '@angular/core';
import { Categoria, Exercicio } from '../model/exercicio.model';


@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  // Categorias que vão aparecer no Menu da Home
  private categorias: Categoria[] = [
    { id: 'sintaxe', nome: 'Sintaxe Básica', descricao: 'Variáveis, tipos de dados e operadores.', icone: '✍️' },
    { id: 'condicional', nome: 'Estruturas Condicionais', descricao: 'Tomada de decisões com if, else e switch.', icone: '🔀' },
    { id: 'repeticaoI', nome: 'Estruturas de Repetição I', descricao: 'Laços básicos utilizando while e do-while.', icone: '🔄' },
    { id: 'repeticaoII', nome: 'Estruturas de Repetição II', descricao: 'Laços avançados utilizando for, for-in e for-of.', icone: '🔁' }
  ];

  // Map contendo mais de 8 exercícios para cada uma das chaves
  private exerciciosPorCategoria: Record<string, Exercicio[]> = {
    sintaxe: [
      { id: 1, titulo: 'Declaração Constante', enunciado: 'Qual palavra-chave declara uma variável imutável?', respostaCorreta: 'const' },
      { id: 2, titulo: 'Tipo de Dado', enunciado: 'Qual o tipo resultante de typeof true?', respostaCorreta: 'boolean' },
      // ... Adicione mais 6 ou mais exercícios aqui
    ],
    condicional: [
      { id: 1, titulo: 'Se Padrão', enunciado: 'Qual estrutura avalia se uma condição é verdadeira?', respostaCorreta: 'if' },
      // ... Adicione mais 7 ou mais exercícios aqui
    ],
    repeticaoI: [
      { id: 1, titulo: 'Enquanto', enunciado: 'Qual laço testa a condição antes da primeira execução?', respostaCorreta: 'while' },
      // ... Adicione mais 7 ou mais exercícios aqui
    ],
    repeticaoII: [
      { id: 1, titulo: 'Para', enunciado: 'Qual laço é ideal quando sabemos o número exato de repetições?', respostaCorreta: 'for' },
      // ... Adicione mais 7 ou mais exercícios aqui
    ]
  };

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getExercicios(categoriaId: string): Exercicio[] {
    return this.exerciciosPorCategoria[categoriaId] || [];
  }

  getCategoriaInfo(categoriaId: string): Categoria | undefined {
    return this.categorias.find(c => c.id === categoriaId);
  }
}
