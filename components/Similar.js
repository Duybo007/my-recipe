import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import Link from 'next/link'
import { useRouter } from 'next/router'

function Similar() {

    const [similar, setSimilar] = useState([])
    const router = useRouter()
    let params  = router.query


    useEffect(() => {
        getSimilar()
    }, [])

    const getSimilar = async () => {


    const res = await fetch(`https://api.spoonacular.com/recipes/${params.recipe}/similar?apiKey=832d4a7e0e8e4b34add5c8bea50ecf0a&number=9`)
    const data = await res.json()

    setSimilar(data)
        
    }


  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 '>
        <div>
            <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3 ">Similar Recipes</h3>
        <Splide options ={{
            perPage:4,
            arrows: true,
            pagination: false,
            gap: "2rem"
        }}>
            {similar.map((recipe)=> {
                return(
                    <SplideSlide key={recipe.id}>
                        <div className='card  cursor-pointer'>
                            <Link href={"/Recipe/" +recipe.id}><div>
                                <p className='title'>{recipe.title}</p>
                                <img className='img_list' src="https://static.vecteezy.com/system/resources/thumbnails/001/842/936/small/dark-blue-background-in-polygonal-style-vector.jpg" alt={recipe.title}/>
                                <div className='gradient'></div>
                            </div></Link>
                        </div>
                    </SplideSlide>
                )
            })}

        </Splide>
        </div>
    </div>
  )
}

export default Similar