import Link from "next/link";

export default function Old(){
    return(
        <div className="flex items-center justify-start w-full gap-1" >
        <span>Already Have Account?</span>
        <Link href={"/login"} className=" text-button">Sign in now</Link>
        </div>
        )
}