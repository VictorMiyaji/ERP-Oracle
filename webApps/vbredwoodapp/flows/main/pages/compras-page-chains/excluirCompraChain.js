define([
  'vb/action/actionChain',
  'vb/action/actions',
], (
  ActionChain,
  Actions
) => {
  'use strict';

  class excluirCompraChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     */
    async run(context, params) {
      const compraId = params ? params.key : null;

      if (!compraId) {
        return;
      }

      // 1. Deleta o registro na API
      await Actions.callRest(context, {
        endpoint: 'Compras/deleteApiComprasId',
        uriParams: {
          'id': compraId
        }
      });

      // 2. Recarrega a lista e força a tabela a atualizar na tela
      await Actions.callChain(context, {
        chain: 'carregarComprasChain'
      });
    }
  }

  return excluirCompraChain;
});