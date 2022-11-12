import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import Link from 'next/link'

function CruisineRecipes() {
    const router = useRouter()
    let params  = router.query
    console.log(params.name)
    const[cuisine, setCuisine]= useState([])
     
    const getCuisine = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=832d4a7e0e8e4b34add5c8bea50ecf0a&number=16&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
        
    }

    useEffect(()=>{
        getCuisine(params.name)
    },[params.name])

  return (
    <div>
        <Header/>

        <div className="bg-white">

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">Have Fun Cooking</h3>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cuisine.map((recipe) => (
            <Link key={recipe.id} href={"/Recipe/"+recipe.id}><a  className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 ">{recipe.title}</h3>
            </a></Link>
          ))}
                </div>
            </div>
        </div>



    </div>
  )
}

export default CruisineRecipes