import React from 'react'
import FoodList from './FoodList'

const FeaturedBeer = (props) => {
    return (
        <div className="max-h-screen flex flex-col justify-center items-center text-white text-center mt-32 px-4 py-4 md:px-6 lg:mt-40 lg:flex-row">
            <img className="max-w-md h-32 mb-5 lg:h-80" src={props.img} alt="brewdog beer" />
            <div className="flex flex-col justify-center items-center ml-0 lg:ml-24">
                <div className="flex flex-row">
                    <h2 className="font-semibold text-pink-50 tracking-wider text-xl mr-1 lg:text-2xl">{props.name}</h2>
                    <h2 className="font-semibold text-pink-300 tracking-wider text-xl lg:text-2xl">({props.abv}%)</h2>
                </div>
                <h2 className="font-light text-pink-50 italic tracking-wide px-4 mb-6 md:px-8 lg:px-16 lg:mb-10 lg:text-md">
                    "{props.tagline}"
                </h2>
                <h2 className="font-bold text-lg tracking-wide underline mb-1 px-4 md:px-8 lg:px-16 lg:text-xl">
                    Works well with
                </h2>
                <FoodList food={props.food} />
            </div>
        </div>
    )
}

export default FeaturedBeer
