import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="fixed w-full flex flex-col text-center sm:flex-row py-6 px-10 sm:text-left sm:justify-between">
                <div className="mb-6 sm:mb-0">
                    <a href="#home" className="text-4xl text-white ml-4">
                        Insert Logo Here
                    </a>
                </div>
                <div>
                    <a href="#home" className="text-lg text-white ml-4 hover:text-pink-300">
                        Home
                    </a>
                    <a href="#beers" className="text-lg text-white ml-4 hover:text-pink-300">
                        Beers
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
