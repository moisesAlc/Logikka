/**
 * Motor de Cálculo Lógico do Logikka
 */

export const operadores = {
  CONJUNCAO: (p, q) => p && q,        // ∧
  DISJUNCAO: (p, q) => p || q,        // ∨
  XOR: (p, q) => p !== q,             // ⊕
  IMPLICACAO: (p, q) => !p || q,      // →
  BICONDICIONAL: (p, q) => p === q,   // ↔
};

/**
 * Valida uma linha da tabela
 * @param {string} valorUsuario - "V", "F", "?" ou ""
 * @param {boolean} p 
 * @param {boolean} q 
 * @param {Function} operacao - Uma das funções do objeto operadores
 * @returns {string} 'correto', 'errado' ou ''
 */
export function validarCalculoLogico(valorUsuario, p, q, operacao) {
  if (valorUsuario === "" || valorUsuario === "?") return "";
  
  const pBool = p === "V";
  const qBool = q === "V";
  
  const resultadoEsperado = operacao(pBool, qBool) ? "V" : "F";
  
  return valorUsuario === resultadoEsperado ? "correto" : "errado";
}

/**
 * Classifica a tabela (Tautologia, Contradição ou Contingência)
 */
export function classificarTabela(dadosRes) {
  if (dadosRes.includes("") || dadosRes.includes("?")) return "Aguardando preenchimento...";
  
  const todasV = dadosRes.every(v => v === "V");
  const todasF = dadosRes.every(v => v === "F");
  
  if (todasV) return "Tautologia";
  if (todasF) return "Contradição";
  return "Contingência";
}

/**
 * Gera os valores de uma coluna de referência baseada na posição e total de variáveis.
 * @param {number} index - O índice da variável (0 para P, 1 para Q, etc.)
 * @param {number} numVars - Total de variáveis (ex: 2 ou 3)
 * @returns {string[]} Array de "V" e "F"
 */
export function gerarValoresReferencia(index, numVars) {
  const totalLinhas = Math.pow(2, numVars);
  const blocoTamanho = Math.pow(2, numVars - index - 1);
  const valores = [];

  for (let i = 0; i < totalLinhas; i++) {
    // Alterna entre V e F baseado no tamanho do bloco para aquela variável
    const isV = Math.floor(i / blocoTamanho) % 2 === 0;
    valores.push(isV ? "V" : "F");
  }

  return valores;
}

/**
 * Gera o conjunto completo de colunas de referência.
 * @param {number} numVars - Quantidade de variáveis
 * @returns {Object[]} Array de objetos formatados para o componente Coluna
 */
export function gerarColunasIniciais(numVars) {
  const nomes = ["P", "Q", "R", "S", "T"]; // Suporta até 5 variáveis
  const colunas = [];

  for (let i = 0; i < numVars; i++) {
    colunas.push({
      id: nomes[i],
      valores: gerarValoresReferencia(i, numVars),
      isReferencia: true
    });
  }

  return colunas;
}