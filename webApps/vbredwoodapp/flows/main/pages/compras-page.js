define([], function() {
  'use strict';

  class PageModule {
    constructor() {
      this.listaOriginal = [];
    }

    /**
     * Guarda a lista vinda da API convertendo o ID para String
     */
    guardarCompras(lista) {
      this.listaOriginal = (lista || []).map(item => ({
        ...item,
        id: String(item.id)
      }));
      return this.listaOriginal;
    }

    /**
     * Filtra a lista pelo ID
     */
    filtrarPorId(texto) {
      if (!texto || String(texto).trim() === '') {
        return this.listaOriginal;
      }
      const termo = String(texto).trim();
      return this.listaOriginal.filter(item => String(item.id).includes(termo));
    }
  }

  return PageModule;
});