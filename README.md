# Avatar-Arena
#### _Jogo de estratégia_
Aplicação do [meu primeiro projeto pessoal](https://codepen.io/pedropaivadev/full/zYjoJYw), refatorada com a biblioteca React.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Descrição
O projeto é uma *Single-Page Application* feita com componentes **React** e estilizados com CSS puro. A ideia do jogo surgiu durante a [aula 08](https://codepen.io/pedropaivadev/full/dyeOJKa) da Imersão Dev 5 da Alura, que ocorreu no período de 05 a 18 de Setembro de 2022. Após o evento eu adicionei um modificador de atributos, para alterar os valores de ataque e defesa de cada personagem, desse modo o jogo exigiu menos sorte e mais estratégia.

<img src="./src/assets/Anima.gif" alt="gif"/>

## Instruções
Para iniciar a partida, basta clicar no selo vermelho do pergaminho e você receberá uma carta aleatória dos cinco personagens cadastrados: Aang, Katara, Sokka, Toph e Suko.

As cartas são mostradas e identificadas como *Jogador* e *Oponente*. A carta do oponente faz escolhas aleatórias de ataque, defesa e pode ou não utilizar o efeito especial. O jogador por sua vez deve analisar as possibilidades de jogo do oponente, para escolher o seu atributo de ataque ou defesa e se é viável utilizar o efeito especial da sua carta, visto que algumas cartas podem modificar atributos de outras.

Após fazer as suas escolhas, o jogador deve clicar novamente no selo vermelho, para remover esse lacre e ler o conteúdo do pergaminho com o resultado da partida.

É possível verificar o conteúdo de cada versão, selecionando a *branch* específica e o histórico de [commits].

> Caso você seja um desenvolvedor, use as instruções abaixo para instalar as dependências e sugerir alterações para a aplicação.

Após baixar o projeto deste repositório, dentro do diretório do projeto você deve usar o comando `npm install` em um terminal, para gerar a pasta **node_modules**.
```sh
npm install
```
Concluída a instalação das dependências do projeto, use o comando `npm start` para visualizar a aplicação na porta [localhost:3000](http://localhost:3000).
```sh
npm start
```
  A página irá recarregar a cada alteração feita no código e mostrará eventuais erros no console.

## Histórico de versões

Esse foi o primeiro projeto pessoal que eu considero ter feito sozinho. Ele foi imprescindível para fixar os meus conhecimentos de **JavaScript**, **CSS** e **HTML**. Na época eu ainda não sabia utilizar o git e gitHub da melhor forma, mas é possível verificar alguns deploys das versões na tabela baixo.

| Versão | Update |
| ------ | ------ |
| versão_0.1 | Primeira versão do projeto, ainda utilizando o cartão fornecido pela Alura, mas com a implantação do modificador de atributos. Tentei adicoinar a fonte oficial da franquia, mas não obtive sucesso. |
| versão_0.2 | Troquei as cartas, adicionei animações de CSS, mesclando com uma setTimeOut no JS. Arrumei o bug de mostrar as escolhas da maquina quando clicava em "jogar", sem selecionar os atributos da carta do jogador. Usei o DOM de visibility para ocultar botões e partes do HTML, conforme as animações desejadas eram mostradas. |
| [versão_0.3](https://avatar-arena-git-v03-pedropaivadev.vercel.app/) | Versão final utilizando *JavaScript Vanilla*. Reduzido o tamanho das cartas, para tornar o jogo responsivo para mobile. Adicionada mais animações e efeitos sonoros para cada carta. |
| [versão_1.1](https://avatar-arena-git-v11-pedropaivadev.vercel.app/) | Refatoração utilizando a biblioteca React e melhorada a estilização e resposividade. |

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[commits]: <https://github.com/PedroPaivaDev/Avatar-Arena/commits/main>