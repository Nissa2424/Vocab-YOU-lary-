import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// API CALLS FOR words

const dbUrl = firebaseConfig.databaseURL;

// GET words
const getWords = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE word
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords().then(resolve);
    })
    .catch((error) => reject(error));
});

// GET SINGLE word
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((errors) => reject(errors));
});

// CREATE word
const createWord = (newwordData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, newwordData)
    .then((response) => {
      const firebaseKey = response.data.id;
      axios.patch(`${dbUrl}/words/${firebaseKey}.json`, { firebaseKey })
        .then(() => getWords().then((allwords) => resolve(allwords)));
    })
    .catch((errors) => reject(errors));
});

// UPDATE word
const updateWord = (wordsObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${wordsObj.firebaseKey}.json`, wordsObj)
    .then(() => getWords().then(resolve))
    .catch(reject);
});

// SEARCH word

// LANGUAGE word
const languageWords = (language) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="language"&equalTo=${language}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  // This works too .catch(reject);
});

export {
  getWords,
  createWord,
  languageWords,
  deleteWord,
  getSingleWord,
  updateWord
};
