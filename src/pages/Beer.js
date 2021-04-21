import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import SingleBeer from '../components/SingleBeer'
import Button from '../components/Button'

const Beer = (props) => {
    const [beer, setBeer] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchBeerById(props.id)
    })

    const fetchBeerById = (id) => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBeer(...data)
                setIsLoading(false)
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="min-h-screen flex justify-center flex-col items-center bg-gradient-to-l from-indigo-800 to-purple-600 font-sans">
            {isLoading && <h1 className="text-4xl text-white ml-4">Fetching your beer...</h1>}
            {beer && (
                <SingleBeer
                    img={beer.image_url}
                    name={beer.name}
                    abv={beer.abv}
                    tagline={beer.tagline}
                    description={beer.description}
                    food={beer.food_pairing}
                />
            )}
            <div className="mb-5">
                <Button handleClick={() => navigate('/beers')}>Go back</Button>
            </div>
        </div>
    )
}

export default Beer
