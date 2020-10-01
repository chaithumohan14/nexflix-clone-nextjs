import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5sT50BJEABK0btvOTrmLukjo7Ragx1Ag",
  authDomain: "netflix-clone-nextjs.firebaseapp.com",
  databaseURL: "https://netflix-clone-nextjs.firebaseio.com",
  projectId: "netflix-clone-nextjs",
  storageBucket: "netflix-clone-nextjs.appspot.com",
  messagingSenderId: "748725265770",
  appId: "1:748725265770:web:2ce101e885ca6cf07bb113",
  measurementId: "G-RCPQBVJM5T",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
