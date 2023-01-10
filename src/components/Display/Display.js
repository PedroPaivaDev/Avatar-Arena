import React from 'react';
import styles from './Display.module.css';
import cards from '../../service/cards';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Card from '../Card/Card';

const Display = () => {
  const [slide, setSlide] = React.useState('Sortear Carta');
  const [result, setResult] = React.useState(null);
  const [guide, setGuide] = React.useState(null);
  // const [playerDeck, setPlayerDeck] = React.useState();
  // const [machineDeck, setMachineDeck] = React.useState();

  //o slide 'sortear carta' vai se tornar 'escolher cartas'. As cartas escolhidas serão utilizadas como parâmetro para montar o deck da máquina, após o click do botão (na função showCards)

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
    const playerSelection = (parseInt(Math.random()*(cards.length)));
    const playerDeck=([cards[playerSelection]]);
    const machineDeck=(cards.filter((card) => card !== cards[playerSelection]));

    setPlayerCard(pickUpCard(playerDeck));
    setMachineCard(pickUpCard(machineDeck));

    setGuide('Escolha a sua ação e se você utilizará o efeito especial.')
    setSlide('Realizar Movimento');
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
      machineChoiceAbility===1 && setMachineAbility(true);
    }
  }

  const showResult = React.useCallback((machineAction) => {
    if (playerCard.attributes[playerAction] > machineCard.attributes[machineAction]) {
      setResult('O jogador venceu!')
    } else if (playerCard.attributes[playerAction] < machineCard.attributes[machineAction]) {
      setResult('O oponente venceu!')
    } else if (playerCard.attributes[playerAction] === machineCard.attributes[machineAction]) {
      setResult('Empate')
    }

    setSlide('Nova Partida');
  }, [playerCard, playerAction, machineCard])

  React.useEffect(() => {
    machineAction!==null && showResult(machineAction);
  },[machineAction, showResult])

  function resetGame() {
    setPlayerCard(null);
    setMachineCard(null);
    setResult(null);
    setPlayerAction(null);
    setMachineAction(null);
    setGuide(null);
    setPlayerAbility(null);
    setMachineAbility(null);

    setSlide('Sortear Carta');
  }

  function handleClick() {
    document.querySelector('.labelBtn').classList.add('strech')
    if(slide==='Sortear Carta') return showCards()
    if(slide==='Realizar Movimento') return validate()
    if(slide==='Nova Partida') return resetGame()
  }

  return (
    <>
      {playerCard && machineCard && <div className={styles.cards}>
        <>
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
        </>
      </div>}
      <div className={styles.display}>
        {playerCard && machineCard && <p className={styles.guide}>{guide}</p>}
        <div className={styles.resulAndButton}>
          {result && <Result result={result}/>}
          <Button scrollOpen={result} label={slide} onClick={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default Display;