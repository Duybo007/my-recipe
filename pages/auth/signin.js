import React from 'react'
import { getProviders, signIn as SignIntoProvider} from "next-auth/react"
import Header from '../../components/Header'
function signin( {providers}) {
  return (
    <>
        <Header/>
        <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
            <img className='w-80 mt-60' src="https://ih1.redbubble.net/image.1695311119.6289/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg"/>
            <div className='mt-10'>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                    <button className='p-3 bg-blue-500 rounded-lg text-white' 
                    onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                        Sign in with {provider.name}
                    </button>
                    </div>
                ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}
export default signin