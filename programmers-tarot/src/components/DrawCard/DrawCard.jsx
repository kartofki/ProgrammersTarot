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

  // handle card reset (flip back to face down)
  const handleResetCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      // clear card after half the animation
      setCurrentCard(null);
    }, 300);

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
          {/* Card Face */}
          <div className={styles.flipCardFront}>
            <img
              className={styles.cardImg}
              src={currentCard ? currentCard.image : '/Cards-png/borderedback.png'}
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
    // Invisible placeholder
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
      
      <div className={styles.cardDescription}><h2></h2><h2 className={styles.cardName}>
  <span style={{ color: "#333", fontWeight: "normal" }}>Your Card:</span> {currentCard.name}
</h2>
    <span style={{ color: "#333", fontWeight: "normal" }}>Description:</span> {currentCard.description}</div>
    </div>
  </div>
) : (
  <div className={styles.cardDisplay}>
    <div className={styles.placeholder}>
    <h2>Press the button to draw a card </h2>
    </div>
  </div>
)}
    </div>
    <hr className={styles.hrSolid}></hr>
    </div>
  );
};

export default DrawCard;
