import firebase from 'firebase/app';
import 'firebase/auth';
import { showWords } from '../components/words';
import logoutButton from '../components/buttons/logoutButton';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //  person is logged in do something...
      showWords();
      logoutButton();
    } else {
      // person is NOT logged in

    }
  });
};

export default checkLoginStatus;
