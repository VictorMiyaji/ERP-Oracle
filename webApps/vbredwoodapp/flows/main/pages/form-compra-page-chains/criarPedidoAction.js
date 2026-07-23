define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class criarPedidoAction extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const response = await Actions.callRest(context, {
        endpoint: 'Compras/postApiCompras',
        body: $variables.pedidoCompra,
      });

      const toCompras = await Actions.navigateToPage(context, {
        page: 'compras',
      });
    }
  }

  return criarPedidoAction;
});