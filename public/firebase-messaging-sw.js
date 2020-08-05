importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDKpVNO4m0bhKgdufnm-wKxMvObHD1P_Uk",
  authDomain: "message-40b6e.firebaseapp.com",
  databaseURL: "https://message-40b6e.firebaseio.com",
  projectId: "message-40b6e",
  storageBucket: "message-40b6e.appspot.com",
  messagingSenderId: "33752763710",
  appId: "1:33752763710:web:23712930afc96a20fcf06f"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();