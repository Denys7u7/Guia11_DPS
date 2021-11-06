import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAl3O_UdLIBi4OMdAMjAZoeAImUBGoofyQ",
  authDomain: "birthday-bdf23.firebaseapp.com",
  projectId: "birthday-bdf23",
  storageBucket: "birthday-bdf23.appspot.com",
  messagingSenderId: "180993056136",
  appId: "1:180993056136:web:1d7d3238de6a7b26c06e3d"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase;