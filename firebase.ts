// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ER5LaXjrZVFjNR17_A-n_LdhZw1vjqI",
  authDomain: "figflix-2ab35.firebaseapp.com",
  projectId: "figflix-2ab35",
  storageBucket: "figflix-2ab35.appspot.com",
  messagingSenderId: "182328770169",
  appId: "1:182328770169:web:3fc5b45f5d54eb8eb2dea8",
  measurementId: "G-GM7P05GMEP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const initFirebase = () => {
  return app;
};
