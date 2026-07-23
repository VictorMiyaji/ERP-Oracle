define([
  'vb/action/actionChain',
  'vb/action/actions',
], (
  ActionChain,
  Actions
) => {
  'use strict';

  class carregarComprasChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $variables, $functions } = context;

      // 1. Busca os dados na API REST
      const response = await Actions.callRest(context, {
        endpoint: 'Compras/getApiCompras',
      });

      const listaApi = response.body ? (response.body.content || []) : [];

      // 2. Guarda a lista formatada no módulo JS
      const listaFormatada = $functions.guardarCompras(listaApi);

      // 3. Reatribui a variável inteira para a tabela renderizar
      $variables.comprasADP = {
        ...$variables.comprasADP,
        data: listaFormatada
      };
    }
  }

  return carregarComprasChain;
});