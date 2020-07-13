import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBMfTBBu_ZgkQ7BgT-pf48tuL4UliSPifc",
  authDomain: "covid-19-efe88.firebaseapp.com",
  databaseURL: "https://covid-19-efe88.firebaseio.com",
  projectId: "covid-19-efe88",
  storageBucket: "covid-19-efe88.appspot.com",
  messagingSenderId: "903854665064",
  appId: "1:903854665064:web:2aaf6bc09e67bd01e97add"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseHospitals = firebaseDB.ref('hospitals');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id:childSnapshot.key
    })
  });
  return data;
}
export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseHospitals,
  firebaseVideos,
  firebaseLooper
}