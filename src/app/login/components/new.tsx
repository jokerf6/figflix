import Link from "next/link";

export default function New(){
    return(
    <div className="flex items-center justify-start w-full gap-1" >
    <span>New to Figflix?</span>
    <Link href={"/signup"} className=" text-button">Sign up now</Link>
    </div>
    )
}