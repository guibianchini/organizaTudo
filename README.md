
# OrganizaTudo 📝

Este projeto consiste em uma aplicação de lista de tarefas (**To-Do List**) desenvolvida com **React**, **Ionic**, **TypeScript** e **JSON-server**.

O código está organizado e comentado para fácil manutenção. A aplicação está pronta para ser executada conforme as instruções no README.

## Funcionalidades ⚙️

- ✅ Adicionar tarefas à lista.
- ❌ Remover tarefas da lista.
- ✏️ Editar tarefas da lista.
- 🔍 Filtrar tarefas por 'Todas', 'Pendentes' e 'Concluídas'.
- 📱 Design responsivo.
- 🌐 Integração com API simulada (JSON-server) para operações CRUD.
- 🔄 Gerenciamento de estado com **React hooks**.

## Requisitos 📋

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (versão 18)
- **npm** (gerenciador de pacotes do Node.js)
- **Ionic CLI** (Interface de linha de comando do Ionic)

### Instalação das Ferramentas ⚙️

#### 1. Instalar o Node.js:
   Baixe e instale o **Node.js** na versão 18 [aqui](https://nodejs.org/pt/blog/release/v18.12.0).

#### 2. Instalar o npm:
   O `npm` já vem instalado junto com o **Node.js**. Você pode verificar se está instalado corretamente rodando o seguinte comando no terminal:
   ```bash
   npm -v
   ```

#### 3. Instalar o Ionic CLI:
   O **Ionic CLI** é necessário para rodar a aplicação com o **Ionic**. Para instalar globalmente, execute:
   ```bash
   npm install -g @ionic/cli
   ```

#### 4. Instalar o JSON Server:
   O **JSON Server** é usado para simular a API no projeto. Instale-o globalmente:
   ```bash
   npm install -g json-server
   ```

## Configuração e Instalação 🛠️

#### 1. Clone o repositório:
   Clone o repositório do projeto para sua máquina local:
   ```bash
   git clone git@github.com:guibianchini/organizaTudo.git
   cd organizaTudo
   ```

#### 2. Instalar as dependências do projeto:
   Dentro da pasta do projeto, instale as dependências utilizando o **npm**:
   ```bash
   npm install
   ```

## Execução 🚀

#### 1. Iniciar o JSON Server

O primeiro passo é iniciar o **JSON Server**, que irá simular uma API com dados mockados.

Na raiz do projeto, dentro da pasta onde você clonou o repositório, execute o comando:
   ```bash
   json-server --watch db.json --port 5000
   ```
   Isso irá iniciar o **JSON Server** na porta 5000, e a API mockada estará acessível em `http://localhost:5000`.

#### 2. Iniciar a Aplicação Ionic

Agora, em um terminal separado, execute o seguinte comando para iniciar a aplicação com o **Ionic**:

```bash
ionic serve
```

Isso irá iniciar a aplicação em um servidor de desenvolvimento e você poderá acessá-la em `http://localhost:8100`.

## Estrutura do Projeto 🗂️

O projeto é estruturado da seguinte forma:

```
src/
├── App.tsx               # Componente principal do aplicativo, onde o roteamento é configurado.
├── assets/               # Arquivos estáticos (não foi utilizado nenhum estático).
├── components/           # Componentes reutilizáveis.
├── contexts/             # Contextos do React utilizando useContext.
├── main.tsx              # Onde o React é renderizado.
├── pages/                # Páginas principais do aplicativo (listagem e visualização de tarefa).
├── services/             # Funções para chamadas de API.
├── theme/                # Configurações de estilo do aplicativo (cores, fontes, etc.).
└── types/                # Tipos TypeScript usados no projeto.

```
