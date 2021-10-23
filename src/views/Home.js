import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getCards } from '../api/data/cardData';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getCards().then((cardsArray) => {
      if (isMounted) setCards(cardsArray);
    });
    return () => {
      isMounted = false;
    }; // cleanup function
  });

  return (
    <div className="container">
      {cards ? (
        <>
          <h1 className="text-center">All Cards</h1>
          <div className="d-flex flex-wrap">
            {cards.map((card) => (
              <Card key={card.firebaseKey} card={card} />
            ))}
          </div>
        </>
      ) : (
        'Add a card'
      )}
    </div>
  );
}
