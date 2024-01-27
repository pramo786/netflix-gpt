import React from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setisSignInForm] = React.useState(true);
    return (<div>
        <div className='absolute'><Header />
            <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='body' />
        </div>
        <form className='w-3/12 p-12 absolute bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-85'>
            <h1 className='font-bold text-3xl'>Sign {isSignInForm ?'In':'Up'}</h1>
           {!isSignInForm&&<input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 bg-opacity-85' /> }
            <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 bg-opacity-85' />
            <input type="password" placeholder='password' className='p-2 my-2 w-full bg-gray-600 bg-opacity-85' />
            <button className='p-2 my-4 bg-red-700 w-full'>Submit</button>
            <p className='p-2 my-4 cursor-pointer' onClick={() => setisSignInForm(!isSignInForm)}>
                {isSignInForm?'New User? Sign Up Now' :'Existing User? Sign in Now'}</p>
        </form>
    </div>
    )
}

export default Login