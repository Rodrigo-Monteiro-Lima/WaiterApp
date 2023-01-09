# 👨‍🍳 WAITERAPP 

![capa (1)](https://user-images.githubusercontent.com/51785898/203780007-2f7a7532-11b8-489c-99cf-09399c1c935e.png)

## Sobre

Waiter app é uma aplicação desenvolvida para controlar os pedidos de um restaurante. Usando ele, os garçons e os cozinheiros/responsáveis no preparado do pedido podem ter uma melhor análise/preparação e organização no ambiente de trabalho.

O projeto possui uma aplicação mobile e web que se complementam, onde o mobile serve para os garçons ver o menu de produtos e criar os pedidos dos clientes; enquanto q a versão web conta com um dashboard dividido em 3 estágios de produção de acordo com a preparação do pedido, sendo eles na fila de espera, em produção e finalizado.

## Tecnologias
Foram usadas as tecnologias e ferramentas abaixo:

* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Expo](https://expo.dev/)
* [Styled Components](https://styled-components.com)
* [MongoDB](https://www.mongodb.com)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar o WAITER**APP** em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js LTS v16
- MongoDB Compass v1.33.1 (apenas caso você queira criar e editar pedidos e categorias, não é necessário para testar)
- Expo para celular ou o Emulador do Android ou IOS.

Para a instalação dos pacotes você deve entrar em cada pasta individualmente
e rodar o comando `yarn install`, pois neste projeto temos a _API_, _FRONTEND_ e _MOBILE_

Navegue para `./api` e rode no terminal o comando:
```bash
yarn install
```
Repita esse passo para `../mobile` e depois em `../frontend`.

### Rotas

Lembre-se de alterar as rotas da aplicação nos arquivos:
<div>

 Altere a váriavel `const baseURL` no arquivo 'api.ts' para o seu  respectivo endereço gerado.
 
</div>

E mais um detalhe, a porta padrão da aplicação foi definida para `:3001`. Caso você queira alterar basta entrar em:
`\waiterapp\api\src\index.ts` 
ou pesquisar na raíz do projeto por `const port` e alterar o valor da váriavel.

Pronto, agora você está preparado para utilizar esta aplicação.
Para iniciar a _API_ e o _FRONTEND_ basta rodar `yarn dev` em suas respectivas pastas.
E para iniciar a versão _MOBILE_ basta rodar `yarn start` em sua respectiva pasta.  

**OBS:** Caso você queira rodar a _API_ fora do ambiente de desenvolvimento, você pode
rodar o comando `yarn build` e logo em seguida passar a utilizar o comando `yarn start`.
</div>

## Preview/Funcionamento
![opjs-gravado-funcionando](https://user-images.githubusercontent.com/51785898/203781640-3d5b5bd8-95aa-4c70-953e-2f6872ea1a15.gif)
