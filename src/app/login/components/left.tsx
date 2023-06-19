'use client';
import Link from "next/link";
import New from "./new";
import Remember from "./remember";
import { validation } from "@/app/util/validation";
import { initFirebase } from "../../../../firebase";
import { ActionCodeURL, getAuth, reauthenticateWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { initializeApp } from "firebase-admin/app";
import serviceAccount from '../../../../serviceAccount.json';

export default function Left(){
    const [Error , setError] = useState('');
            // initializeApp();
    const app = initFirebase();
    const valid = new validation();
    const auth = getAuth();
//const serviceAccount = require("path/to/serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
    const router = useRouter()
        return(
        <div className=" w-3/6 h-full flex items-center justify-center z-50">
        <form className=" flex flex-col h-full  bg-black bg-opacity-50 p-4 items-center justify-center gap-8 w-3/6"
        onSubmit={handelSign}
        >
        <h1 className=" text-white text-5xl font-bold">Sign in</h1>
        <div className="w-full flex gap-1 flex-col">
        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Email" name="Email"/>
        <input className=" w-full p-2 rounded-sm  text-black" placeholder="Password" name="Password" type="password" />

        <button className=" bg-button w-full p-2 rounded-sm" type="submit">Sign in</button>
        <Remember />

        </div>
        <New />
        <p className=" text-red-700">{Error}</p>

        </form>
        </div>
    )
    function handelSign(e:any){
      e.preventDefault();
      if(!valid.validEmail(e.target.Email.value)){
        setError("Invalid Email");
        return;
      }
      if(!valid.validPassword(e.target.Password.value)){
        setError("Invalid Password");
        return;
      }
      const email = e.target.Email.value;
      const password = e.target.Password.value;

        signInWithEmailAndPassword(auth ,email , password)
           .then(() => {
            localStorage.setItem("name" , auth.currentUser!.displayName!);
            const date = new Date();
            localStorage.setItem("currentDate", date.toString());
            router.replace("/home");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          setError("Invalid Username or Password"); 
          // ...
        });
    }
}