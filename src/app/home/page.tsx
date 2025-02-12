import { auth } from '@/auth';
import Logout from '@/components/Logout';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const HomePage:React.FC = async() => {
   
  const session =await auth();  
  
  if(!session?.user) redirect("/");

  return (
    <div className='flex flex-col items-center m-4'>
        <h1> Home Page</h1>
        <h1>{session.user.name}</h1>
        <Image 
            src={session.user.image as string}
            alt={session.user.name as string}
            width={72}
            height={72}
            className='rounded-full'
        />

        <Logout />
    </div>
  )
}

export default HomePage;