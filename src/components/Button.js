import React from 'react'

export default function Button(props) {
    return (
        <div className="w-20 bg-black text-white rounded-xl shadow-md h-10 ">
            <h3 className="flex justify-center items-center mx-auto {{props.style}}">Dumidu{props.txt}</h3>
        </div>
    )
}
