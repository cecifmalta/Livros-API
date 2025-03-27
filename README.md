# Livros Mais Lidos 2025

Este projeto é um servidor Express que consome a API do Google Books para retornar os livros mais lidos de 2025. Ele utiliza a tecnologia **Node.js**, com a biblioteca **Express** para o servidor e **Axios** para realizar requisições HTTP à API do Google Books.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework minimalista e flexível para o Node.js.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições à API do Google Books.

## Funcionalidade

Quando você acessa a rota `/livros-mais-lidos-2025`, o servidor consulta a API do Google Books para retornar uma lista de livros mais lidos. Ele apresenta o título, autor, descrição, link para mais informações e capa do livro.

## Como Instalar e Usar

### Pré-requisitos

Antes de executar o projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Clonar o repositório

Clone o repositório para o seu computador:

```bash
git clone https://github.com/SEU_USUARIO/livros-mais-lidos-2025.git
```

### Passo 2: Instalar as dependências

Dentro da pasta do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### Passo 3: Rodar o servidor

Depois de instalar as dependências, inicie o servidor com o comando:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`. Acesse a rota `/livros-mais-lidos-2025` para ver os livros mais lidos de 2025:

```bash
http://localhost:3000/livros-mais-lidos-2025
```

### Passo 4: Visualizando os resultados

O servidor irá retornar uma lista com os livros mais lidos de 2025 em formato JSON.


