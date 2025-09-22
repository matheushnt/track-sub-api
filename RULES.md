# Track Sub API

## Requisitos Funcionais

- [ ] Deve ser possível criar um usuário;
- [ ] Deve ser possível registrar uma assinatura, com as seguintes informações:
  - Nome;
  - Valor mensal;
  - Data de renovação;
  - Categoria.
- [ ] Deve ser possível listar todas as assinaturas de um usuário;
- [ ] Deve ser possível visualizar apenas uma assinatura;
- [ ] Deve ser possível editar uma assinatura, podendo alterar todos os dados;
- [ ] Deve ser possível apagar uma assinatura;
- [ ] Deve ser possível o usuário acompanhar quanto gasta por mês e por categoria;

## Regras de Negócio

- [ ] Deve ser possível identificar o usuário entre as requisições;
- [ ] O usuário só pode visualizar, editar e apagar assinaturas que ele criou;
- [ ] A data de renovação não pode ser no passado;
- [ ] O valor da assinatura não pode ser negativo;
- [ ] Cada assinatura só pode gerar uma notificação por ciclo de cobrança;
- [ ] O sistema deve somar todas as assinaturas ativas no mês atual;
- [ ] O sistema deve agrupar os valores por categoria;
- [ ] O sistema deve verificar diariamente quais assinaturas vencem nos próximos X dias e notificar o usuário.

## Requisitos Não Funcionais

- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] O usuário será identificado por Cookies de Sessão;
- [ ] Endpoints devem seguir boas práticas REST (nomes claros respostas padronizadas);
- [ ] Em erros, o sistema deve retornar mensagens compreensíveis, não apenas códigos genéricos.
- [ ] A API deve ter documentação com Swagger.
