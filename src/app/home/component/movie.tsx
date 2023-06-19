'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import CustomButton from './customButton';
import Mid from './mid';
import Other from './other';
export default function Movie({data}:any) {
  console.log(data[0]);
  const [id , setId] = useState(0);
  return (
    <div style={{
      height:"100%",
      backgroundColor:"red",
      width:"100%"
    }}>
     <img
      src= {`https://image.tmdb.org/t/p/w1280/${data[id]["backdrop_path"]}`}
      
       alt="Your Image"
       className=' w-screen'
      style={{
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
    <div className=' bg-black absolute top-0 opacity-50' style={{width:"100%", height:"100%"}}>
      </div> 
      <div className=' absolute top-0 z-10 w-full h-full flex flex-col' style={{
        gap:"20%",
        paddingLeft:"5%",
        paddingTop:"5%",
      }}>
        <CustomButton text="Move next" width ="12%" icon="octicon:arrow-right-16" id = {id} setId={setId} length ={data.length - 1} />

       <Mid data={data} id={id} setId={setId} />
     </div>
     <Other allData={data} setId={setId} />

  </div>
  )
}

