import { loginImage } from '@/static/images'
import Nav from './components/nav'
import Mid from './components/home/mid'


export default function Home() {



  return (
    <main className=' w-full h-full'>
      <Nav />
      <div className='w-full h-full absolute'>
        <img src={loginImage}  alt='image' className=' w-full h-full' />
      </div>
      <div className='w-full h-screen flex items-center justify-center '>
      <Mid />

      </div>
    </main>
  )
}
