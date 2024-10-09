
import { initializeApp } from "firebase/app";
import { 
    getAuth ,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import {getFirestore,
    addDoc,
    collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf4-aCwG-tzWz_J8FkX62-t_whitT_8Iw",
  authDomain: "netflix-clone-546a8.firebaseapp.com",
  projectId: "netflix-clone-546a8",
  storageBucket: "netflix-clone-546a8.appspot.com",
  messagingSenderId: "558292089624",
  appId: "1:558292089624:web:604464ea936d4568f53c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try {
      const res =  await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    } catch (error) {
        console.log(error);
        alert(error);
        

        
    }
    
}

const login = async (email,password)=>{

    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
       console.log(error);
       alert(error);
        
    }

}
const logout = async () =>{
    signOut(auth);
}
export {auth,db,login,signup,logout};