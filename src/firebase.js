// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAYiJoDNDtDUeWUzzeeqhGju7jtOJrKE8Y",
    authDomain: "amaclone-74dcb.firebaseapp.com",
    projectId: "amaclone-74dcb",
    storageBucket: "amaclone-74dcb.appspot.com",
    messagingSenderId: "701540061951",
    appId: "1:701540061951:web:fb3bbfafef1887272af2ca",
    measurementId: "G-ETL1NFQZMY"
  };
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

const provider=new GoogleAuthProvider();
export const signInWithGoogle= ()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    const name=result.user.displayName;
    const profilepic=result.user.photoURL;
    localStorage.setItem('name',name)
    localStorage.setItem('profilepic',profilepic)

  })
  .catch((error)=>console.log(error))
}