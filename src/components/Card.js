import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCard, getCards } from '../api/data/cardData';

export default function Card({ card }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteCard(card.firebaseKey).then(getCards);
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
          <Link to={`/edit/${card.firebaseKey}`} className="btn btn-info">
            Edit
          </Link>
          <button
            type="button"
            onClick={() => handleClick('delete')}
            className="btn btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
