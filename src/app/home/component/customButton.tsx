'use client';
import { Icon } from "@iconify/react";
export default function CustomButton({text , icon , width,id, setId , length , allData }:any){
async function click(){
const url = `https://api.themoviedb.org/3/movie/${allData[id]["id"]}/videos?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTBlMmM2ZDgxZGNiNzA5NTU2OWVjMDNmYzNiNzlkYSIsInN1YiI6IjY0ODRjNzMzYzlkYmY5MDBjNTcxYmMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMBljBEdcnM3GnK0s-mzk1rN1CyZFYfs0xatnCiz_Ic'
  }
};

await fetch(url, options)
  .then(res => res.json())
  .then(json => window.location.href= "/home/jkljklkjkl" )
  .catch(err => console.error('error:' + err));

}

    return (
        <button
        onClick={()=>{
            if(text !== "Play") {
             if(id === length)   setId(0)
             else setId(id + 1);
            }
            else{
              click();
            }
        }}
          className={` bg-white text-red-500 p-3 rounded-xl font-bold flex flex-row-reverse items-center justify-center gap-4`} style={{width:width}}>
          <Icon icon={icon} className=' text-xl font-bold' color='text-red-500' />
          {text}</button>
        );
}