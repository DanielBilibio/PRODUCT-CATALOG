# Catálogo de Produtos

Este é um aplicativo de catálogo de produtos construído com React Native e Expo. O aplicativo permite listar produtos, pesquisar por nome e visualizar detalhes de cada produto.

## Funcionalidades

- **Listagem de Produtos**: Exibe uma lista de produtos com imagem, nome e preço.
- **Pesquisa de Produtos**: Permite buscar produtos pelo nome.
- **Detalhes do Produto**: Exibe os detalhes de um produto selecionado, incluindo imagem, descrição, categoria e preço.
- **Navegação**: Possui navegação entre a lista de produtos e a página de detalhes do produto.

## Instalação

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. **Instale as dependências**:
    ```bash
    npm install @react-navigation/native
    npm install @react-navigation/stack
    npm install react-native-screens react-native-safe-area-context
    ```

3. **Instale o Expo CLI** (caso ainda não tenha instalado):
    ```bash
    npm install -g expo-cli
    ```

4. **Inicie o projeto**:
    ```bash
    npx expo start
    ```

## Tecnologias Utilizadas

- **React Native**: Framework para construção de aplicativos móveis utilizando React.
- **Expo**: Plataforma que facilita o desenvolvimento e a execução de aplicativos React Native.
- **React Navigation**: Biblioteca para navegação em aplicativos React Native.
- **Fetch API**: Para consumir a API de produtos.

## Como Usar

1. **Executar o App**:
   - Após iniciar o projeto com `npx expo start`, escaneie o código QR exibido no terminal ou na página web que se abrirá usando o aplicativo Expo Go em seu dispositivo móvel.

2. **Navegação**:
   - Na tela inicial, você verá uma lista de produtos. Você pode pesquisar produtos usando a barra de pesquisa no topo.
   - Toque em qualquer produto para ver seus detalhes em uma nova tela.
   - Na tela de detalhes, você pode voltar para a lista de produtos tocando no botão "Voltar".


