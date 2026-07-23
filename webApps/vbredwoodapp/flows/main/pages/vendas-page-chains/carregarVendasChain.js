define([
  'vb/action/actionChain',
  'vb/action/actions',
], (
  ActionChain,
  Actions
) => {
  'use strict';

  class carregarVendasChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $variables, $functions } = context;

      // 1. Busca os dados na API REST
      const response = await Actions.callRest(context, {
        endpoint: 'Vendas/getApiVendas',
      });

      const listaApi = response.body ? (response.body.content || []) : [];

      // 2. Guarda a lista formatada no JS
      const listaFormatada = $functions.guardarVendas(listaApi);

      // 3. Atualiza o ADP de forma reativa
      $variables.vendasADP = {
        ...$variables.vendasADP,
        data: listaFormatada
      };
    }
  }

  return carregarVendasChain;
});