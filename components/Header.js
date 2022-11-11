import React, { useState } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  MenuIcon
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {

  const [open, setOpen] = useRecoilState(modalState)

  const router = useRouter()
  const [input, setInput]= useState("")

  const submidHandler = (e)=>{
    e.preventDefault()
    router.push("/Search/" + input)
  }

  const {data: session} = useSession()

  return (
    <div className='shadow-sm border-b bg-gray-800 sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>

        {/* logo */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Link href="/"><Image
          src="https://static.wikia.nocookie.net/p__/images/7/70/Remy.png/revision/latest?cb=20211110135646&path-prefix=protagonist"
          layout="fill"
          objectFit='contain'
          /></Link>
        </div>
        <div className='relative w-15 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469049509892-HSLPTDC655VNVJU8BJC1/image-asset.jpeg?format=1000w"
          layout='fill'
          objectFit='contain'
          />
        </div>


        {/* search bar */}
        <form onSubmit={submidHandler}>
          <div className='max-w-xs'>
            <div className='relative mt-1 p-3 rounded-md'>
              <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-non'>
                <SearchIcon className="h-5 w-5 text-gray-500"/>
              </div>
              <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md ' 
              type="text" placeholder="Search" onChangeCapture={(e)=> setInput(e.target.value)} value={input}/>
            </div>
          </div>
        </form>

        {/* right hand header */}
        <div className='flex items-center justify-end space-x-4'>
          
          <Link href="/Cuisine"><p className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>Recipe by Cuisine</p></Link>
          <Link href="/"><p className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>Home</p></Link>
          {session ? (
            <>
            <p onClick={()=> setOpen(true)} className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>Add Post</p>
            <img onClick={signOut} src={session.user.image} alt='profice pic'
            className='h-10 w-10 rounded-full cursor-pointer'/>
            <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
          
        </div>
      </div>  
    </div>
  )
}

export default Header