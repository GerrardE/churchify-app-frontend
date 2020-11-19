import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// eslint-disable-next-line no-console
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const authProvider = new firebase.auth.GoogleAuthProvider();

export {
  authProvider,
  projectFirestore,
};
