
import firebase  from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIn9HWVMKGr-9JfwKncrX8D2duobk13T8",
    authDomain: "fir-82fbb.firebaseapp.com",
    projectId: "fir-82fbb",
    storageBucket: "fir-82fbb.appspot.com",
    messagingSenderId: "718439396568",
    appId: "1:718439396568:web:b2949b068d4f6e0982d3ad"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };
