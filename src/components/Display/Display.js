import React from 'react';
import styles from './Display.module.css';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Card from '../Card/Card';
import CardSelector from 'components/CardSelector/CardSelector';
import useCard from 'hooks/useCard';
import TeamFace from 'components/CharFace/TeamFace';
import useLocalStorage from 'hooks/useLocalStorage';
import getCards from 'service/api';

const Display = () => {

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      setCards(data);
    }
    fetchData()
  },[])

  const { innerWidth: width, innerHeight: height } = window;
  const [slide, setSlide] = useLocalStorage('slide', 'Iniciar');
  const [result, setResult] = React.useState(null);
  const [guide, setGuide] = React.useState(null);
  const [timer, setTimer] = React.useState(false);

  const [playerSelection, setPlayerSelection] = useLocalStorage('pSelection', []);
  const [machineSelection, setMachineSelection] = useLocalStorage('mSelection', []);

  const [playerDeck, setPlayerDeck] = useLocalStorage('playerDeck', {});
  const [machineDeck, setMachineDeck] = useLocalStorage('machineDeck', {});

  const player = useCard('player');
  const machine = useCard('machine');

  function pickUpCard(selection, deck) {
    const randomNumber = parseInt(Math.random()*(selection.length));
    const randomCard = selection[randomNumber];
    return JSON.parse(JSON.stringify(deck[randomCard]));
  }

  function start() {

    if(playerSelection.length===0 || playerSelection.length<3) {
      setGuide('Escolha três personagens para o seu time')
      return
    } else if (playerSelection.length>3) {
      setGuide('Você deve escolher apenas três personagens para o seu time')
      return
    }

    setGuide('Clique no selo para sortear um personagem do seu time')
    setSlide('Sortear')
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

      const newMachineCardLife = machineDeck[machine.card.name].lifePoints - player.card.attributes[player.action];
      setMachineDeck({...machineDeck, 
        [machine.card.name]: {...machineDeck[machine.card.name], 
          lifePoints: newMachineCardLife
        }
      });

    } else if (player.card.attributes[player.action]<
      machine.card.attributes[machineAction]) {

      setResult(`Você perdeu! O oponente estava em modo de ${machineAction} (${machine.card.attributes[machineAction]} pontos) e você estava em modo de ${player.action} (${player.card.attributes[player.action]} pontos).`);

      const newPlayerCardLife = playerDeck[player.card.name].lifePoints - machine.card.attributes[machineAction];
      setPlayerDeck({...playerDeck, 
        [player.card.name]: {...playerDeck[player.card.name], 
          lifePoints: newPlayerCardLife
        }
      });

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

  React.useEffect(() => {
    if(player.card && machine.card) {
      if(playerDeck[player.card.name].lifePoints<=0) {
        setPlayerSelection(playerSelection.filter(card => card !== player.card.name));
      }
      if(machineDeck[machine.card.name].lifePoints<=0) {
        setMachineSelection(machineSelection.filter(card => card !== machine.card.name));
      }
    }
  },[result])

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

    (playerSelection.length===0 || machineSelection.length===0) ? setSlide('Iniciar') : setSlide('Sortear');
  }

  function handleClick() {
    document.querySelector('.labelBtn').classList.add('strech')
    if(slide==='Iniciar') return start()
    if(slide==='Sortear') return showCards()
    if(slide==='Movimentar') return validate()
    if(slide==='Nova Partida') return resetGame()
  }

  function handleTeamView(team) {
    if(slide!=='Iniciar' && (width>690 || height>690)) {
      return team
    } else if(slide==='Sortear') {
      return team
    } else {
      return null
    }
  }

  return (
    <>
      {handleTeamView(<TeamFace team='Jogador' deck={playerDeck} card={player.card}/>)}
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
      {handleTeamView(<TeamFace team='Oponente' deck={machineDeck} card={machine.card}/>)}
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