import React from 'react'

const LoginForm: React.FC = () => {
    
    return (
        <form>
            <button
                className='bg-red-600 px-2    text-white p-1 rounded-md m-1 text-lg'
                type='submit' name="action" value="google">
                구글 로그인
            </button>

            <button className='bg-black  px-2  text-white p-1 rounded-md m-1 text-lg'
                    
                type='submit' name="action" value="github">
                깃허브 로그인
            </button>
        </form>
    
    )
    
}

export default LoginForm