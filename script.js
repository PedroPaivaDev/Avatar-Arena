// MOSTRAR OS VALORES MODIFICADOS, ASSIM QUE MARCADA A OPÇÃO DE EFEITO
// Se clicar em jogar sem escolher o atributo, ele está mostrando se o oponente vai usar efeito ou nao
// Colocar botões a esquerda da tela e deixar apenas as cartas uma ao lado da outra na direita
let carta1 = {
  nome: "Aang",
  imagem: "https://data.whicdn.com/images/115410440/original.gif",
  atributos: { Ataque: 3, Defesa: 6 },
  habilidade:
    "Vento: Reduz a sua defesa em 60% e reduz o ataque do oponente em 50%",
  modificadores: {
    jogAtq: ["Ataque", 1],
    maqAtq: ["Ataque", 0.5],
    jogDef: ["Defesa", 0.4],
    maqDef: ["Defesa", 1]
  }
};

let carta2 = {
  nome: "Katara",
  imagem:
    "https://i.gifer.com/origin/b6/b6e7c73f2dd2dc560f78926f739174ab_w200.webp",
  atributos: { Ataque: 6, Defesa: 4 },
  habilidade:
    "Água: Reduz o ataque e defesa do oponente em 30% e reduz o seu ataque em 40%",
  modificadores: {
    jogAtq: ["Ataque", 0.6],
    maqDef: ["Defesa", 0.7],
    jogDef: ["Defesa", 1],
    maqAtq: ["Ataque", 0.7]
  }
};

let carta3 = {
  nome: "Sokka",
  imagem:
    "https://comicvine.gamespot.com/a/uploads/original/11135/111350907/7590968-0946627975-Q7gl..gif",
  atributos: { Ataque: 4, Defesa: 5 },
  habilidade:
    "Berserker: Reduz a sua defesa em 50% e aumenta o seu ataque em 150%",
  modificadores: {
    jogAtq: ["Ataque", 1.5],
    maqAtq: ["Ataque", 1],
    jogDef: ["Defesa", 0.5],
    maqDef: ["Defesa", 1]
  }
};

let carta4 = {
  nome: "Toph",
  imagem:
    "https://i.pinimg.com/originals/dd/b2/82/ddb282fbf268d850984d655121f1d0ee.gif",
  atributos: { Ataque: 5, Defesa: 5 },
  habilidade:
    "Terra: Reduz o seu ataque e defesa em 40% e Reduz em 60% o ataque e defesa do oponente",
  modificadores: {
    jogAtq: ["Ataque", 0.6],
    maqAtq: ["Ataque", 0.4],
    jogDef: ["Defesa", 0.6],
    maqDef: ["Defesa", 0.4]
  }
};

let carta5 = {
  nome: "Zuko",
  imagem:
    "https://64.media.tumblr.com/069102c477d32ed5bbdeb4c8e714a3c5/22cd28551892b1a6-d2/s500x750/c62951aad4a18f29c35177e0833a392f61156d7a.gifv",
  atributos: { Ataque: 6, Defesa: 3 },
  habilidade:
    "Fogo: Reduz em 50% a defesa do oponente e reduz o seu ataque em 20%",
  modificadores: {
    jogAtq: ["Ataque", 0.8],
    maqAtq: ["Ataque", 1],
    jogDef: ["Defesa", 1],
    maqDef: ["Defesa", 0.5]
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
// var cartaMaquina;
// var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
  exibirCartaMaquina();
}

function obtemAtributoJogador() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemAtributoMaquina() {
  var sorteio = parseInt(Math.random() * 2);
  if (sorteio == 1) {
    return "Ataque";
  } else {
    return "Defesa";
  }
}

function modificadorJogador() {
  var elementoCheck = document.getElementById("habilJogador");
  if (elementoCheck.checked == true) {
    for (var player in cartaJogador.modificadores) {
      if (player == "jogAtq") {
        cartaJogador.atributos[cartaJogador.modificadores[player][0]] =
          cartaJogador.atributos[cartaJogador.modificadores[player][0]] *
          cartaJogador.modificadores[player][1];
      } else if (player == "maqAtq") {
        cartaMaquina.atributos[cartaJogador.modificadores[player][0]] =
          cartaMaquina.atributos[cartaJogador.modificadores[player][0]] *
          cartaJogador.modificadores[player][1];
      } else if (player == "jogDef") {
        cartaJogador.atributos[cartaJogador.modificadores[player][0]] =
          cartaJogador.atributos[cartaJogador.modificadores[player][0]] *
          cartaJogador.modificadores[player][1];
      } else if (player == "maqDef") {
        cartaMaquina.atributos[cartaJogador.modificadores[player][0]] =
          cartaMaquina.atributos[cartaJogador.modificadores[player][0]] *
          cartaJogador.modificadores[player][1];
      }
    }
  }
}

function modificadorMaquina() {
  var sorteio = parseInt(Math.random() * 2);
  var elementoCheck = document.getElementById("habilMaquina");

  if (sorteio == 1) {
    for (var player in cartaMaquina.modificadores) {
      document.getElementById("resulModifc").innerHTML =
        "o oponente usou o efeito especial";
      if (player == "jogAtq") {
        cartaMaquina.atributos[cartaMaquina.modificadores[player][0]] =
          cartaMaquina.atributos[cartaMaquina.modificadores[player][0]] *
          cartaMaquina.modificadores[player][1];
      } else if (player == "maqAtq") {
        cartaJogador.atributos[cartaMaquina.modificadores[player][0]] =
          cartaJogador.atributos[cartaMaquina.modificadores[player][0]] *
          cartaMaquina.modificadores[player][1];
      } else if (player == "jogDef") {
        cartaMaquina.atributos[cartaMaquina.modificadores[player][0]] =
          cartaMaquina.atributos[cartaMaquina.modificadores[player][0]] *
          cartaMaquina.modificadores[player][1];
      } else if (player == "maqDef") {
        cartaJogador.atributos[cartaMaquina.modificadores[player][0]] =
          cartaJogador.atributos[cartaMaquina.modificadores[player][0]] *
          cartaMaquina.modificadores[player][1];
      } else {
        document.getElementById("resulModifc").innerHTML =
          "o oponente nao usou o efeito especial";
      }
    }
  }
}

function jogar() {
  var atributoJogador = obtemAtributoJogador();
  var atributoMaquina = obtemAtributoMaquina();

  modificadorJogador();
  modificadorMaquina();

  var elementoResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoJogador];
  var valorCartaMaquina = cartaMaquina.atributos[atributoMaquina];

  if (atributoJogador === undefined) {
    elementoResultado.innerHTML = "Você deve escolher um atributo";
    return;
  } else if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Você venceu!!! O oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina] +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador] +
      " pontos).";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "Você perdeu! O oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina] +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador] +
      " pontos).";
  } else {
    elementoResultado.innerHTML =
      "Empatou, o oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina] +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador] +
      " pontos).";
  }

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnreiniciar").disabled = false;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  var atributosCarta = cartaJogador.atributos;
  for (var atributo in atributosCarta) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var efeito = `<input type="checkbox" id="habilJogador" class="carta-efeito">${cartaJogador.habilidade}</p>`;

  divCartaJogador.innerHTML =
    moldura + nome + tagHTML + opcoesTexto + efeito + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  var atributosCarta = cartaMaquina.atributos;
  for (var atributo in atributosCarta) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var efeito = `<p id="habilMaquina" class="carta-efeito">${cartaMaquina.habilidade}</p>`;

  divCartaMaquina.innerHTML =
    moldura + nome + tagHTML + opcoesTexto + efeito + "</div>";
}

function reiniciar() {
  cartaMaquina = "";
  cartaJogador = "";

  document.getElementById("resulModifc").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("opcoes").innerHTML = "";

  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementById("carta-maquina").innerHTML = "";

  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-maquina").style.backgroundImage = "";

  document.getElementsByName("atributo").innerHTML = "";

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnreiniciar").disabled = true;

  carta1.atributos = { Ataque: 3, Defesa: 6 };
  carta2.atributos = { Ataque: 6, Defesa: 4 };
  carta3.atributos = { Ataque: 4, Defesa: 5 };
  carta4.atributos = { Ataque: 5, Defesa: 5 };
  carta5.atributos = { Ataque: 6, Defesa: 3 };
}

//console.log(Object.keys(carta1.modificadores))

// DESAFIOS

// adicionar um baralho com várias cartas
// sistema para ganhar a carta do outro jogador
// quando chegar em length 0, a pessoa perde
// a máquina escolher uma tributo

// exibir as duas cartas e passar parâmetros
// uma funcao passa dois comportamentos

// mexer mais no CCS
// adicionar audio de venceu ou perdeu