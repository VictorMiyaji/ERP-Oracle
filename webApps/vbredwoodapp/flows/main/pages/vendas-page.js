define([], function() {
  'use strict';

  class PageModule {
    constructor() {
      this.listaOriginal = [];
    }

    guardarVendas(lista) {
      this.listaOriginal = (lista || []).map(item => ({
        ...item,
        id: String(item.id)
      }));
      return this.listaOriginal;
    }
    
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