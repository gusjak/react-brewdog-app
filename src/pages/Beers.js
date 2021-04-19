import React from 'react'
import ListOfBeers from '../components/ListOfBeers'

const Beers = (props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-l from-indigo-800 to-purple-600 font-sans">
            <div className="w-full grid grid-cols-1 gap-10 mt-40 md:grid-cols-2 lg:grid-cols-3">
                {props.allBeers.map((e) => (
                    <ListOfBeers key={e.id} beer={e} />
                ))}
            </div>
        </div>
    )
}

export default Beers
