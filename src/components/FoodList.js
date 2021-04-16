import React from 'react'

const FoodList = (props) => {
    return (
        <>
            {props.food.map((item) => (
                <li className="font-normal tracking-wide list-none px-2 md:px-8 lg:px-16" key={item}>
                    {item}
                </li>
            ))}
        </>
    )
}

export default FoodList
