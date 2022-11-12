import React, { useEffect, useState } from 'react'
import Link from 'next/link'


function Appetizer() {

    const [appetizer, setAppetizer] = useState([])

    useEffect(() => {
        getAppetizer()
    }, [])

    const getAppetizer = async () => {

        const check = localStorage.getItem("appetizer")
        
        if(check){
            setAppetizer(JSON.parse(check))
        } else {
            const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=832d4a7e0e8e4b34add5c8bea50ecf0a&number=8&type=appetizer`)
            const data = await res.json()
            localStorage.setItem("appetizer", JSON.stringify(data.recipes))
            console.log(data)
            setAppetizer(data.recipes)
        }
    }
console.log(process.env.API_KEY)
  return (
    <div className="bg-white shadow-sm border-b">

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">Our Appetizers</h3>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {appetizer.map((recipe) => (
            <Link key={recipe.id} href={"/Recipe/"+recipe.id}><a key={recipe.id}  className="group">
              <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
  )
}

export default Appetizer