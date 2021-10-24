import firebase from "firebase";
import config from "./config";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: 'uber-eats-clone-327821.firebaseapp.com',
    projectId: 'uber-eats-clone-327821',
    storageBucket: 'uber-eats-clone-327821.appspot.com',
    messagingSenderId: config.ID,
    appId: config.APP_ID
  };

! firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;