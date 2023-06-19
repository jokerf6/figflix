import Link from "next/link";
import Left from "./components/left";
import { loginImage } from "@/static/images";

export default function Login(){
    return(
       <div className=" w-screen h-screen relative">

        <Left/>
        <img src={loginImage}  alt='image' className=' w-full h-full absolute top-0' style={{
            zIndex:"-1",
        }} />

       </div>
    )

}