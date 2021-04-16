import React from 'react'
import { navigate } from '@reach/router'
import Button from './../components/Button'

const NotFound = () => {
    return (
        <div className="w-full h-screen flex justify-center flex-col items-center bg-gradient-to-l from-indigo-800 to-purple-600 font-sans text-white">
            <h1 className="font-bold tracking-wider text-4xl px-4 md:px-8 lg:px-16">404</h1>
            <p className="font-normal tracking-wide list-none mb-4 px-4 md:px-8 lg:px-16">
                Oh, something went wrong! Please go back to the home page
            </p>
            <Button handleClick={() => navigate('/')}>Go back</Button>
        </div>
    )
}

export default NotFound
