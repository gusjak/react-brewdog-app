import React from 'react'
import FoodList from './FoodList'

const FeaturedBeer = (props) => {
    return (
        <div className="flex flex-col justify-center items-center text-white text-center mt-20 px-4 md:mt-32 md:px-6">
            <img className="object-contain h-32 mb-5 md:h-64" src={props.img} alt="brewdog beer" />
            <h2 className="font-semibold tracking-wider text-xl px-4 md:px-8 lg:px-16">
                {props.name} ({props.abv}%)
            </h2>
            <h2 className="font-light text-pink-50 italic tracking-wide px-4 mb-6 md:px-8 lg:px-16">
                "{props.tagline}"
            </h2>
            <h2 className="font-bold text-lg tracking-wide mb-1 px-4 md:px-8 lg:px-16">Pair With:</h2>
            <FoodList food={props.food} />
        </div>
    )
}

export default FeaturedBeer
