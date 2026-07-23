define([
  'vb/action/actionChain',
], (
  ActionChain
) => {
  'use strict';

  class filtrarComprasChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $variables, $functions } = context;

      // 1. Pega a lista filtrada no JS
      const listaFiltrada = $functions.filtrarPorId($variables.textoBusca);

      // 2. Reatribui a variável inteira para FORÇAR a tabela a re-renderizar instantaneamente
      $variables.comprasADP = {
        ...$variables.comprasADP,
        data: listaFiltrada
      };
    }
  }

  return filtrarComprasChain;
});