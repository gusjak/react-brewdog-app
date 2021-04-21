import React from 'react'
import Button from '../components/Button'
import FeaturedBeer from '../components/FeaturedBeer'

const Home = (props) => {
    return (
        <div className="min-h-screen flex justify-center flex-col items-center bg-gradient-to-l from-indigo-800 to-purple-600 font-sans">
            {props.beer !== '' && (
                <FeaturedBeer
                    img={props.beer.image_url ? props.beer.image_url : props.fallbackImage}
                    name={props.beer.name}
                    abv={props.beer.abv}
                    tagline={props.beer.tagline}
                    food={props.beer.food_pairing}
                />
            )}
            <Button handleClick={props.fetchRandomBeer}>Random Beer</Button>
        </div>
    )
}

export default Home
