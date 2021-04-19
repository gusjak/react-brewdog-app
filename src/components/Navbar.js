import React from 'react'
import { Link } from '@reach/router'

function Navbar() {
    return (
        <>
            <nav className="absolute w-full flex flex-col text-center sm:flex-row py-4 px-10 sm:text-left sm:justify-between">
                <div className="mb-6 sm:mb-0">
                    <Link to="/" className="text-3xl text-white ml-4">
                        Brewdog React App
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-lg text-white hover:text-pink-300">
                        Home
                    </Link>
                    <Link to="/beers" className="text-lg text-white ml-4 hover:text-pink-300">
                        Beers
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
