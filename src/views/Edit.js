import React from 'react';
import { useParams } from 'react-router-dom';
import CardForm from '../components/CardForm';

export default function Edit() {
  const { key } = useParams();

  return (
    <div>
      <h1>Your params: {key}</h1>
      <CardForm />
    </div>
  );
}
