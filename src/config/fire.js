import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDivirgJwDzl_9YaNwgPLghrpeR0eQH_m0",
    authDomain: "pro-organizer-974c5.firebaseapp.com",
    databaseURL: "https://pro-organizer-974c5.firebaseio.com",
    projectId: "pro-organizer-974c5",
    storageBucket: "pro-organizer-974c5.appspot.com",
    messagingSenderId: "42940784384",
    appId: "1:42940784384:web:13dd6d9476f46e204e5de5"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(firebaseConfig);

export default fire;