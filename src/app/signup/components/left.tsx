'use client';
import Link from "next/link";
import { initFirebase } from "../../../../firebase";
import { ActionCodeURL, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { useState } from "react";
import Old from "./old";

export default function Left(){
     const [Error , setError] = useState('');
    const app = initFirebase();
    const auth = getAuth();
    const email = "fhakem75@gmail.com";
    const password = "B77bknada*";
    const displayName = "Fahd hakem";

        const actionCodeSettings = {
            url: "http://localhost",
            handleCodeInApp: true,
          };
           createUserWithEmailAndPassword(auth ,email , password)
           .then((userCredential) => {

            const user = userCredential.user;
            console.log(user.uid);
            console.log(user.displayName);

            console.log(email);
           updateProfile(user,{
            displayName:"Fahd",
           }).then(() =>{
            console.log("changed aucess")
           }).catch((err) =>{
            console.log(err);
           });
           
           console.log(user.displayName);

        
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
        //  window.localStorage.setItem('emailForSignIn', email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
              console.log(errorCode);
          // ...
        });
           
    
    console.log("hi");
    console.log(app);
    return(
        <div className=" w-3/6 h-full flex items-center justify-center z-50">
        <form className=" flex flex-col h-full  bg-black bg-opacity-50 p-4 items-center justify-center gap-8 w-3/6">
        <h1 className=" text-white text-5xl font-bold">Sign Up</h1>
        <div className="w-full flex gap-1 flex-col">

        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Name"/>
        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Email"/>
        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Password" />
        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Confirm password" />

        <button className=" bg-button w-full p-2 rounded-sm">Sign in</button>

        </div>
        <Old />
        <p className=" text-red-700">{Error}</p>

        </form>
        </div>
    )
}
{/* <script src="https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4.js"></script> */}