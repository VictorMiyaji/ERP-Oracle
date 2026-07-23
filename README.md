# Projeto Final KPMG - Grupo 3 (ERP)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Projeto Final KPMG **, cujo objetivo é simular funcionalidades das suítes **Oracle Fusion Cloud ERP, HCM, SCM e CX** utilizando o **Oracle Visual Builder**.

O fiquei responsável pelo desenvolvimento do módulo **ERP**, implementando funcionalidades relacionadas ao gerenciamento de **Pedidos de Compra** e **Pedidos de Venda**.

---

## 🎯 Objetivos

O sistema possui as seguintes funcionalidades:

- Tela inicial com Cards de:
  - Pedido de Compra
  - Pedido de Venda

- Dashboard apresentando:
  - Total de pedidos de venda
  - Total de pedidos de compra

- Tela de listagem de pedidos contendo:
  - Lista de pedidos cadastrados
  - Campo de busca pelo número do pedido
  - Botão para criar pedido
  - Botão para excluir pedido

- Cadastro de novos pedidos.

- Após salvar um pedido, o usuário é redirecionado para a tela de listagem.

---

## 🛠️ Tecnologias Utilizadas

- Oracle Visual Builder
- Oracle JET
- REST API
- HTML
- JavaScript
- JSON

---

## 🔗 APIs Utilizadas

### Vendas

- GET /api/vendas
- GET /api/vendas/kpis/produtos-mais-vendidos
- GET /api/vendas/kpis/resumo-financeiro
- GET /api/vendas/kpis/clientes-que-mais-compraram

### Compras

- GET /api/compras
- GET /api/compras/kpis/valorTotalCompras
- GET /api/compras/kpis/FornecedoresComMaisCompras
- GET /api/compras/kpis/produtos-mais-comprados

---

## 📌 Funcionalidades Implementadas

✔ Dashboard inicial

✔ Listagem de pedidos

✔ Exclusão de pedidos

✔ Busca por número do pedido

✔ Indicadores (KPIs)

---

## 👨‍💻 Desenvolvido por

Victor Miyaji

Projeto desenvolvido para o treinamento da **KPMG** utilizando **Oracle Visual Builder**.