import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyDdPYyQap3wxDh4ZtDecE_CM0FvYroAEcY",
    authDomain: "rn-dostavko.firebaseapp.com",
    projectId: "rn-dostavko",
    storageBucket: "rn-dostavko.appspot.com",
    messagingSenderId: "801452701012",
    appId: "1:801452701012:web:2ee8606e9cd949ac4f44c1"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;