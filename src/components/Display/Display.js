import React from 'react';
import styles from './Display.module.css';
import cards from '../../service/cards';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Card from '../Card/Card';
import CardSelector from 'components/CardSelector/CardSelector';
// import useForm from 'hooks/useForm';

const Display = () => {
  const [slide, setSlide] = React.useState('Sortear Carta');
  const [result, setResult] = React.useState(null);
  const [guide, setGuide] = React.useState(null);
  const [timer, setTimer] = React.useState(false);

  const [playerDeck, setPlayerDeck] = React.useState([]);
  // const [machineDeck, setMachineDeck] = React.useState();

  // const player = useForm();
  // usar o customHook para gerar os estados, quando for feita a mecânica de jogo com várias cartas.

  const [playerCard, setPlayerCard] = React.useState(null);
  const [machineCard, setMachineCard] = React.useState(null);

  const [playerAction, setPlayerAction] = React.useState(null);
  const [machineAction, setMachineAction] = React.useState(null);

  const [playerAbility, setPlayerAbility] = React.useState(null);
  const [machineAbility, setMachineAbility] = React.useState(null);

  function pickUpCard(deck) {
    const card = parseInt(Math.random()*(deck.length))
    return deck[card];
  }

  function showCards() {
    // for (let char in playerDeck) {
    //   setPlayerDeck(...cards.filter(card => card.name === playerDeck[char]))
    //   console.log(playerDeck)
    // }

    const playerSelection = parseInt(Math.random()*(cards.length));

    const virtualPlayerDeck = JSON.parse(JSON.stringify(cards.filter(card => 
      card === cards[playerSelection])));
    const virtualMachineDeck = JSON.parse(JSON.stringify(cards.filter((card) => 
      card !== cards[playerSelection])));

    setPlayerCard(pickUpCard(virtualPlayerDeck));
    setMachineCard(pickUpCard(virtualMachineDeck));

    setGuide('Escolha a sua ação e se você utilizará o efeito especial.')
    setSlide('Movimentar');
  }

  function validate() {

    if (playerAction===null) {
      setGuide('Você deve escolher um atributo.');
    } else {

      setGuide('');

      const machineChoiceAction = parseInt(Math.random() * 2);
      if (machineChoiceAction===1) {
        setMachineAction('Ataque');
      } else {
        setMachineAction('Defesa');
      }

      const machineChoiceAbility = parseInt(Math.random() * 2);
      machineChoiceAbility===1?setMachineAbility(true):setMachineAbility(false);
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

    playerAbility && modifierAction(playerCard, machineCard);
    machineAbility && modifierAction(machineCard, playerCard);

    if (playerCard.attributes[playerAction]>
      machineCard.attributes[machineAction]) {
      setResult(`Você venceu! O oponente estava em modo de ${machineAction} (${machineCard.attributes[machineAction]} pontos) e você estava em modo de ${playerAction} (${playerCard.attributes[playerAction]} pontos).`)
    } else if (playerCard.attributes[playerAction]<
      machineCard.attributes[machineAction]) {
      setResult(`Você perdeu! O oponente estava em modo de ${machineAction} (${machineCard.attributes[machineAction]} pontos) e você estava em modo de ${playerAction} (${playerCard.attributes[playerAction]} pontos).`)
    } else if (playerCard.attributes[playerAction]===
      machineCard.attributes[machineAction]) {
      setResult(`Empatou! O oponente estava em modo de ${machineAction} (${machineCard.attributes[machineAction]} pontos) e você estava em modo de ${playerAction} (${playerCard.attributes[playerAction]} pontos).`)
    }
    
    document.getElementById('masterBtn').classList.remove("waggleScroll");
    const scrollClosed = document.getElementById('scrollClosed');
    scrollClosed && scrollClosed.classList.add("rotateSlide");

    document.getElementById(`${playerCard.name}`).classList.add("waggleCard");
    new Audio(playerCard.noise).play();
    setTimeout(() => {
      const machineCardId = document.getElementById(`${machineCard.name}`);
      machineCardId && machineCardId.classList.add("waggleCard");
      new Audio(machineCard.noise).play();
    }, 2000)
    setTimeout(() => {
      setTimer(true);
    }, 1800)

    setSlide('Nova Partida');
  }, [machineCard, playerCard, playerAction, playerAbility])

  React.useEffect(() => {
    machineAction!==null && machineAbility!==null && 
    showResult(machineAction, machineAbility);
  },[machineAction, machineAbility, showResult])

  function resetGame() {
    document.getElementById('masterBtn').classList.add("waggleScroll");
    setPlayerCard(null);
    setMachineCard(null);
    setResult(null);
    setPlayerAction(null);
    setMachineAction(null);
    setGuide(null);
    setPlayerAbility(null);
    setMachineAbility(null);
    setTimer(false);

    setSlide('Sortear Carta');
  }

  function handleClick() {
    document.querySelector('.labelBtn').classList.add('strech')
    if(slide==='Sortear Carta') return showCards()
    if(slide==='Movimentar') return validate()
    if(slide==='Nova Partida') return resetGame()
  }

  return (
    <>
      <div className={styles.cards}>
        {playerCard && machineCard && <>
          <Card id='Jogador' disabled={slide==='Nova Partida'?true:false}
            card={playerCard}
            action={playerAction}
            setAction={setPlayerAction}
            ability={playerAbility}
            setAbility={setPlayerAbility}
          />
          <Card id='Oponente' disabled={true}
            card={machineCard}
            action={machineAction}
            setAction={setMachineAction}
            ability={machineAbility}
            setAbility={setMachineAbility}
          />
        </>}
      </div>
      <div className={styles.display}>
        {slide==='Sortear Carta' && 
          <CardSelector
            cards={cards}
            playerDeck={playerDeck}
            setPlayerDeck={setPlayerDeck}
          />
        }
        {playerCard && machineCard && 
          <p className={styles.guide}>{guide}</p>
        }
        <div className={styles.resulAndButton}>
          {result && <Result result={result} machineAbility={machineAbility}/>}
          <Button scrollOpen={timer} label={slide} onClick={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default Display;