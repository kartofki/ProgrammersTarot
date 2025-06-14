import React, { useState } from 'react';
import styles from './DrawCard.module.css';
import { tarotCards } from './tarotCards';

const DrawCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [nextCard, setNextCard] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleDrawCard = () => {
    // Generate a new card
    const randomCardIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomCardIndex];
    const randomDescriptionIndex = Math.floor(Math.random() * card.descriptions.length);
    const randomDescription = card.descriptions[randomDescriptionIndex];
    const newCard = { ...card, description: randomDescription };

    // Set the next card (for the back face)
    setNextCard(newCard);
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentCard(newCard);
      setNextCard(null);
      setIsFlipping(false);
    }, 600); 
  };

  const handleResetCard = () => {
    setNextCard(null); 
    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentCard(null);
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div className={styles.drawCardContainer}>
      {/* Heading */}
      <h2>Draw A Card</h2>
      <p>
        🔮 Welcome to Programmer's Tarot, where coding meets the ancient cosmic wisdom of Tarot! 🔮
        <br />
        <br />
        Draw a card, and let the universe guide your next commit, whether it's fixing bugs,
        surviving sprints, or unlocking the mysteries of "works on my machine." Whether
        you're chasing bugs or wondering if your code will finally compile, trust the tarot for
        some cosmic advice. May your debugger be ever in your favor! 🌟
      </p>
      <hr className={styles.hrSolid}></hr>
      <div className={styles.cardAndDescription}>
        {/* Card And Button Container */}
        <div className={styles.cardAndButton}>
          <div className={styles.flipCard}>
            <div className={`${styles.flipCardInner} ${isFlipping ? styles.isFlipping : ''}`}>
              {/* Card Front */}
              <div className={styles.flipCardFront}>
                <img
                  className={styles.cardImg}
                  src={currentCard ? currentCard.image : '/Cards-png/borderedback.png'}
                  alt="Card front"
                />
              </div>
              {/* Card Back */}
              <div className={styles.flipCardBack}>
                <img
                  className={styles.cardImg}
                  src={nextCard ? nextCard.image : '/Cards-png/borderedback.png'}
                  alt="Card back"
                />
              </div>
            </div>
          </div>

          <button className={styles.button} onClick={handleDrawCard}>
            {currentCard ? 'Draw New Card' : 'Draw a Card'}
          </button>
          
          {/* Reset button */}
          {currentCard ? (
            <button 
              onClick={handleResetCard}
              type="button"
              className={styles.button}
            >
              Reset
            </button>
          ) : (
            <button 
              type="button"
              className={styles.button}
              style={{ visibility: 'hidden' }}
              tabIndex={-1}
              aria-hidden="true"
            >
              Reset
            </button>
          )}
        </div>

        {currentCard ? (
          <div className={styles.cardDisplay}>
            <div className={styles.cardDescriptionWrapper}>
              <div className={styles.cardDescription}>
                <h2></h2>
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
      <hr className={styles.hrSolid}></hr>
    </div>
  );
};

export default DrawCard;