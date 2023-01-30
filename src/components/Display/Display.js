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
 
  //mostrar em tela as outras duas cartas, para ver a vida de cada uma.
  //mudar a remoção da carta do deck para o selection
  const [playerSelection, setPlayerSelection] = React.useState([]);
  const [machineSelection, setMachineSelection] = React.useState([]);

  const [playerDeck, setPlayerDeck] = React.useState({});
  const [machineDeck, setMachineDeck] = React.useState({});

  const player = useCard();
  const machine = useCard();

  function pickUpCard(selection, deck) {
    const randomNumber = parseInt(Math.random()*(selection.length));
    const randomCard = selection[randomNumber];
    return JSON.parse(JSON.stringify(deck[randomCard]));
  }

  function start() {

    if(playerSelection.length===0 || playerSelection.length<3) {
      setGuide('Escolha três personagens para o seu baralho')
      return
    } else if (playerSelection.length>3) {
      setGuide('Você deve escolher apenas três personagens para o seu baralho')
      return
    }

    showCards()
    setSlide('Sortear Carta')
  }

  function showCards() {

    player.setCard(pickUpCard(playerSelection, playerDeck));
    machine.setCard(pickUpCard(machineSelection, machineDeck));
    

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
      machineDeck[machine.card.name].lifePoints -= player.card.attributes[player.action];
    } else if (player.card.attributes[player.action]<
      machine.card.attributes[machineAction]) {
      setResult(`Você perdeu! O oponente estava em modo de ${machineAction} (${machine.card.attributes[machineAction]} pontos) e você estava em modo de ${player.action} (${player.card.attributes[player.action]} pontos).`);
      playerDeck[player.card.name].lifePoints -= machine.card.attributes[machineAction];
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

    if(playerDeck[player.card.name].lifePoints<0) {
      setPlayerSelection(playerSelection.filter(card => card !== player.card.name));
    }
    if(machineDeck[machine.card.name].lifePoints<0) {
      setMachineSelection(machineSelection.filter(card => card !== machine.card.name));
    }

    setSlide('Nova Partida');
  }, [machine, player])

  React.useEffect(() => {
    machine.action!==null && machine.ability!==null && 
    showResult(machine.action, machine.ability);
  },[machine.action, machine.ability])

  function resetGame() {

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

    (playerSelection.length===0 || machineSelection.length===0) ? setSlide('Iniciar') : setSlide('Sortear Carta');
  }

  function handleClick() {
    document.querySelector('.labelBtn').classList.add('strech')
    if(slide==='Iniciar') return start()
    if(slide==='Sortear Carta') return showCards()
    if(slide==='Movimentar') return validate()
    if(slide==='Nova Partida') return resetGame()
  }

  return (
    <>
      <div className={styles.cards}>
        {player.card && machine.card && <>
          <Card id='Jogador' disabled={slide==='Nova Partida'?true:false}
            className={styles.strechDown}
            lifePoints={playerDeck[player.card.name].lifePoints}
            {...player}
          />
          <Card id='Oponente' disabled={true}
            className={styles.strechDown}
            lifePoints={machineDeck[machine.card.name].lifePoints}
            {...machine}
          />
        </>}
      </div>
      <div className={styles.display}>
        {slide==='Iniciar' && 
          <CardSelector
            cards={cards}
            playerSelection={playerSelection}
            setPlayerSelection={setPlayerSelection}
            machineSelection={machineSelection}
            setMachineSelection={setMachineSelection}
            setPlayerDeck={setPlayerDeck}
            setMachineDeck={setMachineDeck}
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