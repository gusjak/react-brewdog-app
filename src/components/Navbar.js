import React from 'react'
import { Link } from '@reach/router'

function Navbar() {
    return (
        <>
            <nav className="absolute w-full flex flex-col text-center sm:flex-row py-4 px-10 sm:text-left sm:justify-between">
                <div className="flex flex-col mb-2 sm:mb-6">
                    <h1 className="font-semibold text-3xl tracking-wide text-white ml-4">Brewdog React</h1>
                    <a
                        href="https://punkapi.com/documentation/v2"
                        className="text-sm text-white ml-4 hover:text-pink-300 lg:ml-0"
                    >
                        https://punkapi.com/documentation/v2
                    </a>
                </div>
                <div>
                    <Link to="/" className="text-xl text-white mr-4 hover:text-pink-300">
                        Home
                    </Link>
                    <Link to="/beers" className="text-xl text-white ml-4 hover:text-pink-300">
                        Beers
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
