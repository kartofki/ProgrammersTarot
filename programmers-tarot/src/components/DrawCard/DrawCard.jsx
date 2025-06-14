import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './DrawCard.module.css';
import { tarotCards } from './tarotCards';

const DrawCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDrawCard = () => {
    const randomCardIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomCardIndex];
    const randomDescriptionIndex = Math.floor(Math.random() * card.descriptions.length);
    const randomDescription = card.descriptions[randomDescriptionIndex];
    const newCard = { ...card, description: randomDescription };

    setCurrentCard(newCard);
    setIsFlipped(true);
  };

  const handleResetCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard(null);
    }, 600); 
  };

  return (
    <div className={styles.drawCardContainer}>
      <h2>Draw A Card</h2>
      <p>
        🔮 Welcome to Programmer's Tarot, where coding meets the ancient cosmic wisdom of Tarot! 🔮
        <br /><br />
        Draw a card, and let the universe guide your next commit, whether it's fixing bugs,
        surviving sprints, or unlocking the mysteries of "works on my machine." Whether
        you're chasing bugs or wondering if your code will finally compile, trust the tarot for
        some cosmic advice. May your debugger be ever in your favor! 🌟
      </p>
      <hr className={styles.hrSolid} />

      <div className={styles.cardAndDescription}>
        <div className={styles.cardAndButton}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side */}
            <div className={styles.flipCardFront} key="front">
              <img
                className={styles.cardImg}
                src={'/Cards-png/borderedback.png'}
                alt="Card back"
              />
            </div>

            {/* Back Side */}
            <div className={styles.flipCardBack} key="back">
              <img
                className={styles.cardImg}
                src={currentCard ? currentCard.image : '/Cards-png/borderedback.png'}
                alt={currentCard ? currentCard.name : "Card back"}
              />
            </div>
          </ReactCardFlip>

          <button className={styles.button} onClick={handleDrawCard}>
            {currentCard ? 'Draw New Card' : 'Draw a Card'}
          </button>

          {currentCard ? (
            <button className={styles.button} onClick={handleResetCard}>
              Reset
            </button>
          ) : (
            <button className={styles.button} style={{ visibility: 'hidden' }}>
              Reset
            </button>
          )}
        </div>

        {currentCard ? (
          <div className={styles.cardDisplay}>
            <div className={styles.cardDescriptionWrapper}>
              <div className={styles.cardDescription}>
                <h2 className={styles.cardName}>
                  <span style={{ color: "#333", fontWeight: "normal" }}>Your Card:</span> {currentCard.name}
                </h2>
                <span style={{ color: "#333", fontWeight: "normal" }}>Description:</span> {currentCard.description}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cardDisplay}>
            <div className={styles.placeholder}>
              <h2>Press the button to draw a card</h2>
            </div>
          </div>
        )}
      </div>

      <hr className={styles.hrSolid} />
    </div>
  );
};

export default DrawCard;
