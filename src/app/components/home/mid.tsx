'use client';
import { logoImage } from "@/static/images";
import Search from "../search";
import { Language } from "@/app/util/language";
export default function Mid(){
  const  myLang = new Language();
    return(
        <div className="flex items-center flex-col justify-center z-20 gap-2">
         <img src={logoImage}  alt='image'  className=" w-72 h-42" />
          <h1 className=" text-white font-bold text-4xl">{myLang.lang().welcome}</h1>
            <p className=" text-white text-lg">{myLang.lang().brief}</p>
            <Search />
        </div>

    );

}
// {    language.lang(window.location.href).welcome}