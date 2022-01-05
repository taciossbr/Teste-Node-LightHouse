# Teste backEnd NODE LightHouse (Solução)

![GitHub repo size](https://img.shields.io/github/repo-size/taciossbr/Teste-Node-LightHouse?style=for-the-badge)

Solução de teste técnico para Backend da LightHouse, a ideia do projeto e uma API simples para registro de usuários.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você possui NodeJS instalado, (testado nas seguintes versões: node=v16.13.0, npm=8.1.0)

## Download do código

```bash
# HTTPS
git clone https://github.com/taciossbr/Teste-Node-LightHouse.git
# or by SSH
git clone git@github.com:taciossbr/Teste-Node-LightHouse.git
```

## Migrações de banco de dados

Pra tornar as coisas mais faceis usei o SQLITE assim não e necessario subir um banco de dados.

```bash
npx knex migrate:up
```

(Opcional) Ja deixei preparado alguns usuario para popular o banco, é so rodar o seguinte comando:

```bash
npx knex seed:run  
```

## 🚀 Executando

Para executar o projeto:

```bash
npm start
```

Para rodar os testes:

```
npm test
```
