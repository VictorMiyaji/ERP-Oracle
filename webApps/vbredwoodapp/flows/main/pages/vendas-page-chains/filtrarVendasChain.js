define([
  'vb/action/actionChain',
], (
  ActionChain
) => {
  'use strict';

  class filtrarVendasChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $variables, $functions } = context;

      // 1. Pega a lista filtrada no JS
      const listaFiltrada = $functions.filtrarPorId($variables.textoBusca);

      // 2. Reatribui o ADP para atualizar a tabela na tela
      $variables.vendasADP = {
        ...$variables.vendasADP,
        data: listaFiltrada
      };
    }
  }

  return filtrarVendasChain;
});