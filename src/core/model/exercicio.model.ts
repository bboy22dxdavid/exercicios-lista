/*=============================================================
CLASS MODELO CONTEM A INTERFACE DA CATEGORIA DE EXERCICIOS
=============================================================*/

export interface Exercicio{
 id: number;
  titulo: string;
  enunciado: string;
  respostaCorreta: string;
}

export interface Categoria {
  id: string;          // ex: 'sintaxe', 'condicional'
  nome: string;        // ex: 'Sintaxe Básica'
  descricao: string;   // Resumo para o card da Home
  icone: string;       // Emoji ou classe de ícone
}
