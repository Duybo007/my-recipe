import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Similar from '../../components/Similar'

function Recipe() {

    const router = useRouter()
    let params  = router.query
    const [detail, setDetail]= useState([])
    const [activeTab, setActiveTab] = useState("instructions")

    const fetchDetail = async() =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=377fedd8a7674309a40704af3a9a70ce`)
        const detail = await data.json()
        console.log(detail)
        setDetail(detail)
    }

    useEffect(()=>{
        fetchDetail()

    }, [params.recipe])

  return (
    <div>
        <Header/>

        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-auto">{detail.title}</h2>
                
            </div>
            
            <div className='flex'>
                <img src={detail.image} className="my-10 max-h-80"/>
                <div className='flex flex-col mt-10'>
                    <div className='flex'>
                        <button onClick={() => setActiveTab('instructions')} type="button" className={activeTab === "instructions" ? "text-white bg-blue-700 h-10 w-40 ml-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-blue-700 h-10 w-40 ml-10 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 dark:active:bg-blue-400"  }>Instructions</button>
                        <button onClick={() => setActiveTab('ingredients')} type="button" className={activeTab === "ingredients" ? "text-white bg-blue-700 h-10 w-40 ml-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-blue-700 h-10 w-40 ml-10 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 dark:active:bg-blue-400"  }>Ingredients</button>
                    </div>
                    {activeTab === "instructions" && (
                        <div className='ml-10'>
                            <h3 className='mt-5' dangerouslySetInnerHTML={{__html: detail.summary}}></h3>
                            <h3 className='mt-5' dangerouslySetInnerHTML={{__html: detail.instructions}}></h3>
                        </div>
                    )}
                    {activeTab === "ingredients" && (
                        <ul className='ml-10 mt-5 space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400'>
                            {detail.extendedIngredients.map((i)=> (
                            <li key={i.id}>{i.original}</li>) )}
                        </ul>
                    )}
                    
                </div>
            </div>
        </div>

        <Similar/>

    </div>
  )
}

export default Recipe