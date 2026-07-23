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

  class vbEnterListener extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables, $totalCompras } = context;


      const response = await Actions.callRest(context, {
        endpoint: 'Compras/getApiCompras',
      });

      $variables.totalCompras = response.body.totalElements;

      const response2 = await Actions.callRest(context, {
        endpoint: 'Vendas/getApiVendas',
      });

      $variables.totalVendas = response2.body.totalElements;
    }
  }

  return vbEnterListener;
});
