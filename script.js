// "https://cdn.videvo.net/videvo_files/audio/premium/audio0083/watermarked/ElectricitySpark%206039_62_3_preview.mp3"
// reduzir um pouco o tamanho das cartas, para caber na tela retrato do celular, talvez reduzir o tamanho das fontes e do GIF.
// fazer animação das cartas saindo do botão
// Adicionar 10 pontos de vida para cada carta
// Adicionar mais cartas
// Jogador pode selecionar as cartas que deseja

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
  },
  noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0083/watermarked/Electronic%206039_51_3_preview.mp3"
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
  },
  noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0194/watermarked/WaterSplash%20L2WATER_57_2_preview.mp3"
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
  },
  noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0171/watermarked/SwordBody%20IE01_86_2_preview.mp3"
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
  },
  noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0152/watermarked/RockFall%20IE01_80_3_preview.mp3"
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
  },
  noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0089/watermarked/Fire%206083_83_2_preview.mp3"
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
  
  setTimeout(() => {
    document.getElementById("btnSortear").classList.remove("unrollButton")
    // document.getElementById("btnJogar").classList.remove("wrapButton")
    document.getElementById("btnSortear").style.visibility = "hidden"
  },2000)  
  // document.getElementById("btnSortear").classList.add("wrapButton")
  document.getElementById("btnJogar").style.visibility = "visible"
  document.getElementById("btnJogar").classList.add("unrollButton")

  exibirCartaJogador();
  exibirCartaMaquina();
}

function obtemAtributoJogador() {
  var radioAtributos = document.getElementsByName("atributoJog");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemAtributoMaquina() {
  var radioAtributos = document.getElementsByName("atributoMaq");
  let labelAtriMaq = document.getElementsByName("labelAtriMaq");
  
  labelAtriMaq[0].classList.add("sombreado");
  labelAtriMaq[1].classList.add("sombreado");
  
  var maqAtaque = document.getElementById("MaqAtaque");
  var maqDefesa = document.getElementById("MaqDefesa");
  
  var sorteio = parseInt(Math.random() * 2);
  
  if (sorteio == 1) {
    maqAtaque.checked = true;
  } else {
    maqDefesa.checked = true;
  }
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
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
    elementoCheck.checked=true
  }

  if (elementoCheck.checked==true) {
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

function conferir() {
  var radioAtributos = document.getElementsByName("atributoJog");
  var elementoResultado = document.getElementById("aviso");

  if ( (radioAtributos[0].checked == false) && (radioAtributos[1].checked == false) ) {
      elementoResultado.innerHTML = "Você deve escolher um atributo";
  } else {
    elementoResultado.innerHTML = ""
    jogar()
  }
}

function jogar() {
  var atributoJogador = obtemAtributoJogador();
  var atributoMaquina = obtemAtributoMaquina();

  modificadorJogador();
  modificadorMaquina();

  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = ""

  var valorCartaJogador = cartaJogador.atributos[atributoJogador];
  var valorCartaMaquina = cartaMaquina.atributos[atributoMaquina];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Você venceu!!! O oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina].toFixed(2) +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador].toFixed(2) +
      " pontos).";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "Você perdeu! O oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina].toFixed(2) +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador].toFixed(2) +
      " pontos).";
  } else {
    elementoResultado.innerHTML =
      "Empatou, o oponente estava em modo de " +
      atributoMaquina +
      " (" +
      cartaMaquina.atributos[atributoMaquina].toFixed(2) +
      " pontos)" +
      " e você estava em modo de " +
      atributoJogador +
      " (" +
      cartaJogador.atributos[atributoJogador].toFixed(2) +
      " pontos).";
  }
  
  let audio1 = new Audio(cartaJogador.noise)
  let audio2 = new Audio(cartaMaquina.noise)
  
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnreiniciar").disabled = false;
  
  setTimeout(() => {
    document.getElementById("btnJogar").classList.remove("unrollButton")
    // document.getElementById("btnreiniciar").classList.remove("wrapButton")
    document.getElementById("btnJogar").style.visibility = "hidden"
  },2000)  
  // document.getElementById("btnJogar").classList.add("wrapButton")
  document.getElementById("btnreiniciar").style.visibility = "visible"
  document.getElementById("btnreiniciar").classList.add("unrollButton")
  
  document.getElementById("scrollClosed").classList.add("scrollClosed")
  document.getElementById("scrollOpen").classList.add("scrollOpen")
  
  document.getElementById("carta-jogador").classList.add("waggle")
  audio1.play()
  
  setTimeout(() => {
    document.getElementById("scrollResult").style.visibility = "visible"
    audio2.play()
    document.getElementById("carta-maquina").classList.add("waggle")
  }, 2000)
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  
  divCartaJogador.innerHTML = `
        <div class="imagemFundo">
          <img id="imagemFundo" src="https://raw.githubusercontent.com/PedroPaivaDev/Avatar-Arena/Versão-3/wooden-board-with-parchment-paper-cartoon-style-graphical-user-interface-signboard_313437-1235-removebg-preview-removebg-preview.png">
        </div>
        <div class="nomeCarta">
          <p id="carta-subtitle">${cartaJogador.nome}</p>
        </div>
        <div class="imagemCarta">
          <img id="imagemCarta" src="${cartaJogador.imagem}">
        </div>
        <div id='opcoesJogador' class='carta-status'>
          
        </div>
        <div class="habilidade">
          <input type="checkbox" id="habilJogador">
          <div id="carta-efeito" class="hooverLabel">
            <label for="habilJogador">${cartaJogador.habilidade}</label>
          </div>
        </div>
      </div>
  `;
  // https://codepen.io/matheus-forstner/pen/mdLWYge?editors=0011
  var opcoes = document.getElementById("opcoesJogador");
  
  var opcoesTexto = "";
  var atributosCarta = cartaJogador.atributos;
  for (var atributo in atributosCarta) {
    opcoesTexto += `<input type="radio" id="Jog${atributo}" name="atributoJog" value="${atributo}">
                    <label class="sombreado hooverLabel" for="Jog${atributo}" id="cartaStatusJog"> ${atributo} ${cartaJogador.atributos[atributo]} </label><p></p>`;
  }
  
  opcoes.innerHTML = opcoesTexto;
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  
  divCartaMaquina.innerHTML = `
  <div class="imagemFundo">
          <img id="imagemFundo" src="https://raw.githubusercontent.com/PedroPaivaDev/Avatar-Arena/Versão-3/wooden-board-with-parchment-paper-cartoon-style-graphical-user-interface-signboard_313437-1235-removebg-preview-removebg-preview.png">
        </div>
        <div class="nomeCarta">
          <p id="carta-subtitle">${cartaMaquina.nome}</p>
        </div>
        <div class="imagemCarta">
          <img id="imagemCarta" src="${cartaMaquina.imagem}">
        </div>
        <div id='opcoesMaquina' class='carta-status'>
          
        </div>
        <div class="habilidade">
          <input type="checkbox" id="habilMaquina">
          <div id="carta-efeito" class="sombreado">
            <label>${cartaMaquina.habilidade}</label>
          </div>
        </div>          
      </div>
  `;
  
  var opcoes = document.getElementById("opcoesMaquina");

  var opcoesTexto = "";
  var atributosCarta = cartaMaquina.atributos;
  for (var atributo in atributosCarta) {
    opcoesTexto +=`<input type="radio" id="Maq${atributo}" name="atributoMaq" value="${atributo}">
                   <label for="Maq${atributo}" name="labelAtriMaq" id="cartaStatusMaq"> ${atributo} ${cartaMaquina.atributos[atributo]} </label><p></p>`;
  }
  
  opcoes.innerHTML = opcoesTexto;
}

function reiniciar() {
  cartaMaquina = "";
  cartaJogador = "";

  document.getElementById("resulModifc").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("opcoesMaquina").innerHTML = "";
  document.getElementById("opcoesJogador").innerHTML = "";

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
  
  document.getElementById("scrollClosed").classList.remove("scrollClosed");
  document.getElementById("scrollOpen").classList.remove("scrollOpen");
  document.getElementById("scrollResult").style.visibility = "hidden";
  
  
  setTimeout(() => {
    document.getElementById("btnreiniciar").classList.remove("unrollButton")
    // document.getElementById("btnSortear").classList.remove("wrapButton")
    document.getElementById("btnreiniciar").style.visibility = "hidden"
  },100)  
  // document.getElementById("btnreiniciar").classList.add("wrapButton")
  document.getElementById("btnSortear").style.visibility = "visible"
  document.getElementById("btnSortear").classList.add("unrollButton")
  
  document.getElementById("carta-jogador").classList.remove("waggle")
  document.getElementById("carta-maquina").classList.remove("waggle")
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