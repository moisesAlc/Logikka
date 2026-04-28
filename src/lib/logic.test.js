import { describe, it, expect } from 'vitest';
import { operadores, validarCalculoLogico, classificarTabela } from './logic.js';
import { gerarValoresReferencia, gerarColunasIniciais } from './logic.js';

describe('Gerador de Premissas', () => {
  it('deve gerar a coluna P corretamente para 2 variáveis (bloco de 2)', () => {
    const p = gerarValoresReferencia(0, 2);
    expect(p).toEqual(["V", "V", "F", "F"]);
  });

  it('deve gerar a coluna Q corretamente para 2 variáveis (bloco de 1)', () => {
    const q = gerarValoresReferencia(1, 2);
    expect(q).toEqual(["V", "F", "V", "F"]);
  });

  it('deve gerar 8 linhas para 3 variáveis', () => {
    const colunas = gerarColunasIniciais(3);
    expect(colunas).toHaveLength(3);
    expect(colunas[0].valores).toHaveLength(8);
    // Primeira coluna (P) em n=3 deve ser V,V,V,V,F,F,F,F
    expect(colunas[0].valores[0]).toBe("V");
    expect(colunas[0].valores[4]).toBe("F");
  });
});

describe('Operadores Lógicos', () => {
  it('deve validar a Conjunção (AND)', () => {
    expect(operadores.CONJUNCAO(true, true)).toBe(true);
    expect(operadores.CONJUNCAO(true, false)).toBe(false);
    expect(operadores.CONJUNCAO(false, true)).toBe(false);
    expect(operadores.CONJUNCAO(false, false)).toBe(false);
  });

  it('deve validar a Disjunção (OR)', () => {
    expect(operadores.DISJUNCAO(true, true)).toBe(true);
    expect(operadores.DISJUNCAO(false, true)).toBe(true);
    expect(operadores.DISJUNCAO(true, false)).toBe(true);
    expect(operadores.DISJUNCAO(false, false)).toBe(false);
  });

  it('deve validar o XOR (Exclusivo)', () => {
    expect(operadores.XOR(true, true)).toBe(false);
    expect(operadores.XOR(true, false)).toBe(true);
    expect(operadores.XOR(false, true)).toBe(true);
    expect(operadores.XOR(false, false)).toBe(false);
  });

  it('deve validar a Implicação (Condicional)', () => {
    expect(operadores.IMPLICACAO(true, true)).toBe(true);
    expect(operadores.IMPLICACAO(true, false)).toBe(false);
    expect(operadores.IMPLICACAO(false, true)).toBe(true);
    expect(operadores.IMPLICACAO(false, false)).toBe(true);
  });

  it('deve validar o Bicondicional (Bicondicional)', () => {
    expect(operadores.BICONDICIONAL(true, true)).toBe(true);
    expect(operadores.BICONDICIONAL(true, false)).toBe(false);
    expect(operadores.BICONDICIONAL(false, true)).toBe(false);
    expect(operadores.BICONDICIONAL(false, false)).toBe(true);
  });
});

describe('Função validarLinha', () => {
  it('deve retornar "correto" quando o usuário acerta', () => {
    const resultado = validarCalculoLogico("V", "V", "V", operadores.CONJUNCAO);
    expect(resultado).toBe('correto');
  });

  it('deve retornar "errado" quando o usuário erra', () => {
    const resultado = validarCalculoLogico("F", "V", "V", operadores.CONJUNCAO);
    expect(resultado).toBe('errado');
  });

  it('deve retornar vazio quando a célula não foi preenchida', () => {
    expect(validarCalculoLogico("?", "V", "V", operadores.CONJUNCAO)).toBe('');
    expect(validarCalculoLogico("", "V", "V", operadores.CONJUNCAO)).toBe('');
  });
});

describe('Classificação da Tabela', () => {
  it('deve identificar uma Tautologia', () => {
    expect(classificarTabela(["V", "V", "V", "V"])).toBe('Tautologia');
  });

  it('deve identificar uma Contradição', () => {
    expect(classificarTabela(["F", "F", "F", "F"])).toBe('Contradição');
  });

  it('deve identificar uma Contingência', () => {
    expect(classificarTabela(["V", "F", "V", "F"])).toBe('Contingência');
  });
});