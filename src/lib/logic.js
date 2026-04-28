/**
 * Logikka Logic Engine - v0.6
 * Motor de Cálculo e Geração de Tabelas Verdade
 */

export const conetoresLogicos = {
  CONJUNCAO: (a, b) => a && b,        // ∧
  DISJUNCAO: (a, b) => a || b,        // ∨
  XOR: (a, b) => a !== b,             // ⊕
  IMPLICACAO: (a, b) => !a || b,      // →
  BICONDICIONAL: (a, b) => a === b,   // ↔
};

/**
 * Avalia se a resposta do usuário para uma linha específica é logicamente válida.
 * @param {string} resposta - "V", "F", "?" ou ""
 * @param {string} premissaA - Valor da primeira coluna ("V" ou "F")
 * @param {string} premissaB - Valor da segunda coluna ("V" ou "F")
 * @param {Function} operacao - Função lógica de conetoresLogicos
 * @returns {string} 'correto', 'errado' ou ''
 */
export function avaliarLinhaIndividual(resposta, premissaA, premissaB, operacao) {
  if (resposta === "" || resposta === "?") return "";
  
  // Conversão explícita de strings para booleanos para evitar erros de tipagem
  const aBool = premissaA === "V";
  const bBool = premissaB === "V";
  
  const vereditoLogico = operacao(aBool, bBool) ? "V" : "F";
  
  return resposta === vereditoLogico ? "correto" : "errado";
}

/**
 * Classifica o resultado final da coluna (Tautologia, Contradição ou Contingência)
 * @param {string[]} colunaResultado - Array de respostas preenchidas
 */
export function classificarTabela(colunaResultado) {
  if (colunaResultado.includes("") || colunaResultado.includes("?")) {
    return "Aguardando preenchimento...";
  }
  
  const todasVerdadeiras = colunaResultado.every(v => v === "V");
  const todasFalsas = colunaResultado.every(v => v === "F");
  
  if (todasVerdadeiras) return "Tautologia";
  if (todasFalsas) return "Contradição";
  return "Contingência";
}

/**
 * Gera a sequência de V/F para colunas de referência (P, Q, R...)
 */
export function gerarValoresReferencia(indiceVariavel, totalVariaveis) {
  const totalLinhas = Math.pow(2, totalVariaveis);
  // Calcula o tamanho do bloco (ex: em 4 linhas, P muda a cada 2, Q a cada 1)
  const tamanhoBloco = Math.pow(2, totalVariaveis - indiceVariavel - 1);
  const sequencia = [];

  for (let i = 0; i < totalLinhas; i++) {
    const ehVerdadeiro = Math.floor(i / tamanhoBloco) % 2 === 0;
    sequencia.push(ehVerdadeiro ? "V" : "F");
  }

  return sequencia;
}

/**
 * Cria o objeto de configuração para as colunas de premissas iniciais
 */
export function gerarColunasIniciais(quantidadeVariaveis) {
  const nomesPadrao = ["P", "Q", "R", "S", "T"];
  const colunasGeradas = [];

  for (let i = 0; i < quantidadeVariaveis; i++) {
    colunasGeradas.push({
      id: nomesPadrao[i],
      valores: gerarValoresReferencia(i, quantidadeVariaveis),
      isReferencia: true
    });
  }

  return colunasGeradas;
}