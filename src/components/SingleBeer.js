import React from 'react'
import FoodList from './FoodList'

const SingleBeer = (props) => {
    return (
        <div className="flex flex-col justify-center items-center text-white text-center mt-40 px-4 md:mt-32 md:px-6">
            <img className="object-contain h-60 mb-5 md:h-64" src={props.img} alt="brewdog beer" />
            <div className="flex flex-row">
                <h2 className="font-semibold text-pink-50 tracking-wider text-xl mr-1">{props.name}</h2>
                <h2 className="font-bold text-pink-300 tracking-wider text-xl">({props.abv}%)</h2>
            </div>
            <h2 className="font-light text-gray-50 italic tracking-wider px-2 mb-6 md:px-8 lg:px-16">
                "{props.tagline}"
            </h2>
            <h2 className="font-bold text-lg tracking-wide underline mb-1 px-4 md:px-8 lg:px-16">Description</h2>
            <p className="font-normal text-pink-50 tracking-wide px-4 mb-6 md:px-8 lg:px-16">{props.description}</p>
            <h2 className="font-bold text-lg tracking-wide underline mb-1 px-4 md:px-8 lg:px-16">Works well with</h2>
            <FoodList className="mb-4" food={props.food} />
        </div>
    )
}

export default SingleBeer
