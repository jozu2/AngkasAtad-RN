// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// webapp's config
const firebaseConfig = {
  apiKey: "AIzaSyB5R-UO_WuCeWbsOj214c9xuVsuVDTOxx4",
  authDomain: "angkasatadapp-65942.firebaseapp.com",
  projectId: "angkasatadapp-65942",
  storageBucket: "angkasatadapp-65942.appspot.com",
  messagingSenderId: "191448204299",
  appId: "1:191448204299:web:d9fb29edbdfd4730f0330e",
  measurementId: "G-PTPHQP0HLN"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };