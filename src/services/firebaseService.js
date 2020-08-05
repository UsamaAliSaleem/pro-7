import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}