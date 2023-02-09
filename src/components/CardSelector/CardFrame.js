import React from 'react';
import styles from 'components/CardSelector/CardFrame.module.css';
import Card from 'components/Card/Card';
import getCards from 'service/api';

const CardFrame = ({card, playerSelection, setPlayerSelection, machineSelection, setMachineSelection, setPlayerDeck, setMachineDeck}) => {

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      setCards(data);
    }
    fetchData()
  },[])

  React.useEffect(() => {
    console.log(cards)
  },[cards])

  function handleChange({target}) {
    if (target.checked) {
      setPlayerSelection([...playerSelection, target.value])
    } else {
      setPlayerSelection(playerSelection.filter(char => char !== target.value))
    }
  }

  function makeVirtualDeck(characters) {
    let virtualDeck = [];
    for (let char in characters) {
      virtualDeck = [...virtualDeck, ...cards.filter(card => 
        card.name === characters[char]
      )]
    }
    const newVirtualDeck = virtualDeck.reduce((newCards, newCard) => {
      return {...newCards, [newCard.name]: newCard}
    }, {})
    return JSON.parse(JSON.stringify(newVirtualDeck))
  }

  React.useEffect(() => {
    let machineCharacters = cards.map(char => char.name);
    for (let char in playerSelection) {
      machineCharacters = machineCharacters.filter(card => 
        card !== playerSelection[char])
    }
    setMachineSelection(machineCharacters);
  },[playerSelection])

  React.useEffect(() => {
    setPlayerDeck(makeVirtualDeck(playerSelection));
    setMachineDeck(makeVirtualDeck(machineSelection));
  },[playerSelection, machineSelection])

  return (
    <div className={styles.cardFace}>
      <input id={`selector${card.name}`} type='checkbox'
        value={card.name}
        checked={playerSelection.includes(card.name)}
        onChange={handleChange}
      />
      <label htmlFor={`selector${card.name}`} className={styles.label} >
        <Card card={card} disabled={true} className={styles.card}/>        
      </label>
    </div>
  )
}

export default CardFrame;