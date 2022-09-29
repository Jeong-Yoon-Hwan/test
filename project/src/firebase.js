import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderID: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appID:process.REACT_APP_APP_ID
};

export default firebase.initializeApp(firebaseConfig);