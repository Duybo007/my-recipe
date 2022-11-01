import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'



function Posts() {
  const [posts, setPost] = useState([])

  useEffect(()=>
    onSnapshot(query(collection(db, 'posts'), orderBy('timestamp','desc')), snapshot => {
      setPost(snapshot.docs)
    })
  , [db])

  return (
    <div>
      <h1 className='my-5 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>What people are cooking</h1>
      {posts.map((post)=>(
        <Post 
        key={post.id} 
        id={post.id} 
        username={post.data().username} 
        userImg={post.data().profileImg} 
        img={post.data().image} 
        caption={post.data().caption}/>
      ))}
    </div>
  )
}

export default Posts