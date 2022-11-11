import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import Link from 'next/link'
import axios from 'axios';

function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {


    const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=377fedd8a7674309a40704af3a9a70ce&number=9`)
    console.log(res.data.recipes)
    setPopular(res.data.recipes)
        
    }



  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 '>
                <div>
                    <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3 ">Popular Recipes</h3>
                    <Splide options={{
                        perPage:4,
                        arrows: true,
                        pagination: false,
                        gap: "2rem"
                    }}>
                        {popular.map((recipe)=> {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <div className='card cursor-pointer'>
                                    <Link href={"/Recipe/"+ recipe.id}><div>
                                        
                                            <p className='title'>{recipe.title}</p>
                                            <img className='img_list' src={recipe.image} alt={recipe.title}/>
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


export default Popular