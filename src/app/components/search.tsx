"use client";
import { Icon } from "@iconify/react";
import { Language } from "../util/language";

export default function Search(){
    const language = new Language();
 return(
    <div className="flex justify-center items-center z-10 relative"  >
    <Icon icon="ant-design:search-outlined" className="text-black absolute z-30" style={{
        left:`${localStorage.getItem("lang") === "ar" ? "0" :"5%"}`,
        right:`${localStorage.getItem("lang") === "ar" ? "5%" :"0%"}`,

        fontSize:"120%"
    }}></Icon>
    <input placeholder={language.lang().search} className={`${localStorage.getItem("lang") === "ar" ? "pl-2 pr-12" :"pl-12 pr-2" }  pt-2 pb-2 rounded-md`} />

    </div>
 )   
}