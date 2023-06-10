"use client";
import { logoImage } from "@/static/images";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Language } from "../util/language";
export default function Nav() {  
    const language = new Language();
    const router = useRouter();
    const changeLanguage = () =>{
        language.changeLang();
   router.refresh();
// router.refresh();
    }

    return (  
        <div className={`absolute z-10  flex items-center justify-between rtl:text-right`} style={{
            width: '90%',
            top:"3%",
            left:"5%",
            right:"5%",
        }}>
        <img src={logoImage}  alt='image'  />
         <div className=" flex gap-4">
            <button className=" bg-transparent border-white text-white flex gap-1 justify-center items-center border-2 rounded-lg p-2"
            onClick={() =>changeLanguage()}
            >
            
                <Icon icon={"mdi:world"} color="white" />
                   {language.lang().lang}
            </button>
            <button className=" bg-white border-white text-var(--foreground-rgb) flex gap-1 justify-center items-center border-2 rounded-lg p-2 font-bold">
            {language.lang().signin}
            

            <Icon icon={"iconamoon:profile-fill"} color="var(--foreground-rgb)" />

            </button>

            </div>  
        </div>
    )

} 