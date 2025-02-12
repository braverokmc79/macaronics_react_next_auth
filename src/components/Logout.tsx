import { doLogout } from '@/app/actions/auth'
import React from 'react'


const Logout: React.FC = () => {
  return (
    <form action={doLogout}>
        <button type="submit" 
        className='bg-blue-400 px-2  text-white p-1 rounded-md m-1 text-lg'
        >로그아웃</button>    
    </form>
  )
}

export default Logout