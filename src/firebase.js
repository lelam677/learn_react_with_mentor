import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyA-qCy0I2pJ7q_oOdRZm38ZeUIPAxfLmQI",
  authDomain: "luyentap-nhahang2.firebaseapp.com",
  databaseURL: "https://luyentap-nhahang2-default-rtdb.firebaseio.com",
  projectId: "luyentap-nhahang2",
  storageBucket: "luyentap-nhahang2.appspot.com",
  messagingSenderId: "989266259857",
  appId: "1:989266259857:web:020e3caec17f1ba09af430"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
// Initialize Firebase

export {app,firestore,storage}