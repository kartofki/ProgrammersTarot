import React, { useState } from 'react';
import styles from './DrawCard.module.css';
import { tarotCards } from './tarotCards';

const DrawCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleDrawCard = () => {
    // generate a new card
    const randomCardIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomCardIndex];
    const randomDescriptionIndex = Math.floor(Math.random() * card.descriptions.length);
    const randomDescription = card.descriptions[randomDescriptionIndex];
    const newCard = { ...card, description: randomDescription };

    setIsFlipping(true);

    setTimeout(() => {
      // update card after half the animation
      setCurrentCard(newCard);
    }, 300); // 

    setTimeout(() => {
      // full animation
      setIsFlipping(false);
    }, 600); 
  };

  return (
    <div className={styles.drawCardContainer}>
        {/* Heading */}
      <h2>Draw A Card</h2>
      <p>
        🔮 Welcome to Programmer Tarot, where coding meets the ancient cosmic wisdom of Tarot! 🔮
        <br />
        <br />
        Draw a card, and let the universe guide your next commit, whether it's squashing bugs,
        surviving sprint reviews, or unlocking the mysteries of "works on my machine." Whether
        you're chasing bugs or wondering if your code will finally compile, trust the tarot for
        some cosmic advice. May your debugger be ever in your favor! 🌟
      </p>
      <div className={styles.cardAndDescription}>
      {/* Card And Button Container */}
      <div className={styles.cardAndButton}>
      <div className={styles.flipCard}>
        <div className={`${styles.flipCardInner} ${isFlipping ? styles.isFlipping : ''}`}>
          {/* Card Face */}
          <div className={styles.flipCardFront}>
            <img
              className={styles.cardImg}
              src={currentCard ? currentCard.image : '/Cards-png/borderedback.png'}
            />
          </div>
        </div>
      </div>

      <button onClick={handleDrawCard}>
        {currentCard ? 'Draw New Card' : 'Draw a Card'}
      </button>
      </div>
      {currentCard ? (
        <div className={styles.cardDisplay}>
          <h2>Name: {currentCard.name}</h2>
          <h2>Description: {currentCard.description}</h2>
        </div>
      ) : (<div className={styles.cardDisplay}>
        <h2>Name: </h2>
        <h2>Description:</h2>
      </div>)}
    </div>
    </div>
  );
};

export default DrawCard;
