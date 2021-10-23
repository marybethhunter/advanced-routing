import axios from 'axios';
import firebaseConfig from '../apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/cards.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch(reject);
});

const createCard = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${BASEURL}/cards.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${BASEURL}/cards/${firebaseKey}.json`, { firebaseKey })
        .then(resolve);
    })
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/cards/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

export { createCard, getCards, getSingleCard };
