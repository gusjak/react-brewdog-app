import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button
            type="button"
            onClick={props.handleClick}
            className="
            transition duration-200 ease-in-out transform bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500
            hover:to-yellow-500 hover:scale-105 active:scale-150 font-medium text-white text-xl rounded-full py-1 px-4 flex items-center justify-center 
            mt-6 focus:outline-none
            "
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
}

export default Button
