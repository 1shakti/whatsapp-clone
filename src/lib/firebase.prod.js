// Import the functions you need from the SDKs you need
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9liEe2ixYWqvtDIjwbIXTM6K2e_okGg",
  authDomain: "whatsapp-clone-cd765.firebaseapp.com",
  projectId: "whatsapp-clone-cd765",
  storageBucket: "whatsapp-clone-cd765.appspot.com",
  messagingSenderId: "121133717317",
  appId: "1:121133717317:web:45a9fa351e8da3236f102c"
};

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;