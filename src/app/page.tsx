'use client';
import { loginImage } from '@/static/images'
import Nav from './components/nav'
import Mid from './components/home/mid'
import { useRouter } from 'next/navigation';
import validToken from './util/tokens';
import { useEffect, useState } from 'react';


export default function Home() {
  const router  = useRouter();
  const [load , setLoad] = useState(false);
  useEffect(()=>{

    if(validToken()){
      console.log("Yes");
      router.push("/home");
    }
    else{
      setLoad(true);
    }
  })

  return (
    <main className=' w-full h-full'>
 {
  load ?
      <div>
      <Nav />
      <div className='w-full h-full absolute'>
        <img src={loginImage}  alt='image' className=' w-full h-full' />
      </div>
      <div className='w-full h-screen flex items-center justify-center '>
      <Mid />

      </div>
      </div>
:
<div></div>
}

    </main>
  )
}
