import addWordForm from '../components/forms/addWordForm';
import {
  createWord,
  deleteWord,
  getSingleWord,
  updateWord
} from '../helpers/data/wordData';
import { showWords } from '../components/words';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');

        deleteWord(id).then(showWords);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-word-btn')) {
      addWordForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-word')) {
      e.preventDefault();
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definiton').value,
        language: document.querySelector('#language').value
      };

      createWord(wordObject).then((wordsArray) => showWords(wordsArray));
    }

    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleWord(id).then((wordObj) => addWordForm(wordObj));
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definiton').value,
        language: document.querySelector('#language').value,
        firebaseKey
      };

      updateWord(wordObject).then(showWords);
    }
  });
};

export default domEvents;
