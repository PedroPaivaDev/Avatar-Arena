import React from 'react';
import styles from './Display.module.css';
import cards from '../../service/cards';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Card from '../Card/Card';
import CardSelector from 'components/CardSelector/CardSelector';
import useCard from 'hooks/useCard';

const Display = () => {
  const [slide, setSlide] = React.useState('Iniciar');
  const [result, setResult] = React.useState(null);
  const [guide, setGuide] = React.useState(null);
  const [timer, setTimer] = React.useState(false);
  //mudar o selector para fazer uma cópia de deck e não um array de nomes
  //a única coisa que vai alterar no estado do deck, é a vida de cada carta
  //talvez colocar os decks no context

  //ignorar o acima? o playerDeck vai virar playerSelection
  //criar um estado para criar uma cópia de "card", exclusivo para a renderização
  //mostrar em tela as outras duas cartas, para ver a vida de cada uma.
  //mudar função de resetGame para não remover as cartas do array do Deck, mas sim:
  //na pickUpCard, filtrar a escolha apenas para as cartas com vida maior que zero
  const [playerDeck, setPlayerDeck] = React.useState([]);
  const [machineDeck, setMachineDeck] = React.useState();

  //usar isso para fazer o playerDeck e o machineDeck, mas usando o json string
  const teste = cards.reduce((newCards, newCard) => {
    return {...newCards, [newCard.name]: newCard}
  }, {})
  console.log(teste.Aang)

  const player = useCard();
  const machine = useCard();

  function pickUpCard(deck) {
    const card = parseInt(Math.random()*(deck.length))
    return deck[card];
  }

  function makeVirtualDeck(characters) {
    let virtualDeck = [];
    for (let char in characters) {
      virtualDeck = [...virtualDeck, ...cards.filter(card => 
        card.name === characters[char]
      )]
    }
    return JSON.parse(JSON.stringify(virtualDeck))
  }

  React.useEffect(() => {
    let machineCharacters = cards.map(char => char.name);
    for (let char in playerDeck) {
      machineCharacters = machineCharacters.filter(card => 
        card !== playerDeck[char])
    }
    setMachineDeck(machineCharacters);
  },[playerDeck])

  function showCards() {

    if(playerDeck.length===0 || playerDeck.length<3) {
      setGuide('Escolha três personagens para o seu baralho')
      return
    } else if (playerDeck.length>3) {
      setGuide('Você deve escolher apenas três personagens para o seu baralho')
      return
    }

    let virtualPlayerDeck = makeVirtualDeck(playerDeck);
    let virtualMachineDeck = makeVirtualDeck(machineDeck);

    player.setCard(pickUpCard(virtualPlayerDeck));
    machine.setCard(pickUpCard(virtualMachineDeck));

    setGuide('Escolha a sua ação e se você utilizará o efeito especial.')
    setSlide('Movimentar');
  }

  function validate() {

    if (player.action===null) {
      setGuide('Você deve escolher um atributo.');
    } else {

      setGuide('');

      const machineChoiceAction = parseInt(Math.random() * 2);
      if (machineChoiceAction===1) {
        machine.setAction('Ataque');
      } else {
        machine.setAction('Defesa');
      }

      const machineChoiceAbility = parseInt(Math.random() * 2);
      machineChoiceAbility===1?machine.setAbility(true):machine.setAbility(false);
    }
  }

  const showResult = React.useCallback((machineAction, machineAbility) => {

    function modifierAction(playCard, opponentCard) {
      for (let playAttribute in playCard.modifiers) {
        if (playAttribute === "playerAtq") {
          playCard.attributes[playCard.modifiers[playAttribute][0]] =
            (playCard.attributes[playCard.modifiers[playAttribute][0]] *
            playCard.modifiers[playAttribute][1]).toFixed(2);
        } else if (playAttribute === "machineAtq") {
          opponentCard.attributes[playCard.modifiers[playAttribute][0]] =
            (opponentCard.attributes[playCard.modifiers[playAttribute][0]] *
            playCard.modifiers[playAttribute][1]).toFixed(2);
        } else if (playAttribute === "playerDef") {
          playCard.attributes[playCard.modifiers[playAttribute][0]] =
            (playCard.attributes[playCard.modifiers[playAttribute][0]] *
            playCard.modifiers[playAttribute][1]).toFixed(2);
        } else if (playAttribute === "machineDef") {
          opponentCard.attributes[playCard.modifiers[playAttribute][0]] =
            (opponentCard.attributes[playCard.modifiers[playAttribute][0]] *
            playCard.modifiers[playAttribute][1]).toFixed(2);
        }
      }
    }

    player.ability && modifierAction(player.card, machine.card);
    machineAbility && modifierAction(machine.card, player.card);

    if (player.card.attributes[player.action]>
      machine.card.attributes[machineAction]) {
      setResult(`Você venceu! O oponente estava em modo de ${machineAction} (${machine.card.attributes[machineAction]} pontos) e você estava em modo de ${player.action} (${player.card.attributes[player.action]} pontos).`);
      machine.card.lifePoints = (machine.card.lifePoints - player.card.attributes[player.action]);
    } else if (player.card.attributes[player.action]<
      machine.card.attributes[machineAction]) {
      setResult(`Você perdeu! O oponente estava em modo de ${machineAction} (${machine.card.attributes[machineAction]} pontos) e você estava em modo de ${player.action} (${player.card.attributes[player.action]} pontos).`);
      player.card.lifePoints = (player.card.lifePoints - machine.card.attributes[machineAction]);
    } else if (player.card.attributes[player.action]===
      machine.card.attributes[machineAction]) {
      setResult(`Empatou! O oponente estava em modo de ${machineAction} (${machine.card.attributes[machineAction]} pontos) e você estava em modo de ${player.action} (${player.card.attributes[player.action]} pontos).`);
    }
    
    document.getElementById('masterBtn').classList.remove("waggleScroll");
    const scrollClosed = document.getElementById('scrollClosed');
    scrollClosed && scrollClosed.classList.add("rotateSlide");

    document.getElementById(`${player.card.name}`).classList.add("waggleCard");
    new Audio(player.card.noise).play();
    setTimeout(() => {
      const machineCardId = document.getElementById(`${machine.card.name}`);
      machineCardId && machineCardId.classList.add("waggleCard");
      new Audio(machine.card.noise).play();
    }, 2000)
    setTimeout(() => {
      setTimer(true);
    }, 1800)

    setSlide('Nova Partida');
  }, [machine, player])

  React.useEffect(() => {
    machine.action!==null && machine.ability!==null && 
    showResult(machine.action, machine.ability);
  },[machine.action, machine.ability])

  function resetGame() {

    if(player.card.lifePoints<0) {
      setPlayerDeck(playerDeck.filter(card => card !== player.card.name));
    }
    if(machine.card.lifePoints<0) {
      setMachineDeck(machineDeck.filter(card => card !== machine.card.name));
    }

    document.getElementById('masterBtn').classList.add("waggleScroll");
    player.setCard(null);
    machine.setCard(null);
    setResult(null);
    player.setAction(null);
    machine.setAction(null);
    setGuide(null);
    player.setAbility(null);
    machine.setAbility(null);
    setTimer(false);

    setSlide('Sortear Carta');

    (playerDeck===0 || machineDeck===0) ? setSlide('Iniciar') : setSlide('Sortear Carta');
  }

  function handleClick() {
    document.querySelector('.labelBtn').classList.add('strech')
    if(slide==='Sortear Carta' || slide==='Iniciar') return showCards()
    if(slide==='Movimentar') return validate()
    if(slide==='Nova Partida') return resetGame()
  }

  return (
    <>
      <div className={styles.cards}>
        {player.card && machine.card && <>
          <Card id='Jogador' disabled={slide==='Nova Partida'?true:false}
            className={styles.strechDown}
            {...player}
          />
          <Card id='Oponente' disabled={true}
            className={styles.strechDown}
            {...machine}
          />
        </>}
      </div>
      <div className={styles.display}>
        {slide==='Iniciar' && 
          <CardSelector
            cards={cards}
            playerDeck={playerDeck}
            setPlayerDeck={setPlayerDeck}
          />
        }
        <div className={styles.resulAndButton}>
          {result && <Result result={result} machineAbility={machine.ability}/>}
          <Button scrollOpen={timer} label={slide} onClick={handleClick}/>
        </div>
        {guide && 
          <p className={styles.guide}>{guide}</p>
        }
      </div>
    </>
  )
}

export default Display;