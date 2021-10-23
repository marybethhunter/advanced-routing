import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCard } from '../api/data/cardData';
import CardForm from '../components/CardForm';

export default function Edit() {
  const [editItem, setEditItem] = useState({});

  const { key } = useParams();

  useEffect(() => {
    getSingleCard(key).then(setEditItem);
  }, []);

  return (
    <div>
      <h1>Your params: {key}</h1>
      <CardForm obj={editItem} />
    </div>
  );
}
