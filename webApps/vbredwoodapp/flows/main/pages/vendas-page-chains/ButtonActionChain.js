define([
  'vb/action/actionChain',
  'vb/action/actions',
], (
  ActionChain,
  Actions
) => {
  'use strict';

  class ButtonActionChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     */
    async run(context, params) {
      // Pega o ID da venda clicada
      const vendaId = params ? params.key : null;

      if (!vendaId) {
        return;
      }

      // 1. Chama a API para deletar pelo ID (igualzinho ao seu Compras)
      await Actions.callRest(context, {
        endpoint: 'Vendas/deleteApiVendasId',
        uriParams: {
          'id': vendaId
        }
      });

      // 2. Recarrega os dados atualizando a tabela e o filtro
      await Actions.callChain(context, {
        chain: 'carregarVendasChain'
      });
    }
  }

  return ButtonActionChain;
});