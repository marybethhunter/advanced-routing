import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createCard } from '../api/data/cardData';

const initialState = {
  title: '',
  description: '',
};

export default function CardForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createCard(formInput).then(() => {
      resetForm();
      history.push('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3">
        <input
          type="text"
          className="form-control"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="m-3">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}

CardForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

CardForm.defaultProps = {
  obj: {},
};
