import React from 'react'
import { Link } from '@reach/router'

const ListOfBeers = (props) => {
    return (
        <Link className="transform transition duration-300 hover:scale-105" to={`/beers/${props.beer.id}`}>
            <div className="min-h-full container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg py-6 bg-gradient-to-l from-indigo-900 to-purple-800">
                <img className="object-contain h-56 w-full" src={props.beer.image_url} alt="brewdog beer" />
                <div className="flex flex-col justify-center items-center pt-10 text-gray-600 text-center">
                    <h2 className="font-bold text-pink-300 tracking-wider text-sm">{props.beer.abv}%</h2>
                    <h2 className="font-semibold text-pink-50 tracking-wider text-xl mr-2 px-2">{props.beer.name}</h2>
                    <h2 className="font-light text-gray-50 italic tracking-wider px-4 mb-6 md:px-8 lg:px-16">
                        "{props.beer.tagline}"
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default ListOfBeers
