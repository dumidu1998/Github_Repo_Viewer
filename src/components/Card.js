import React from 'react'

export default function Card(props) {
    return (
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" id={props.h2}>
            <div class="flex justify-center md:justify-end -mt-16">
                <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={props.img} />
            </div>
            <div>
                <h2 class="text-gray-800 text-3xl font-semibold">{props.h2}</h2>
                <p class="mt-2 text-gray-600">{props.desc}</p>
            </div>
            <div class="flex justify-end mt-4">
                <a href={props.url} class="text-xl font-medium text-indigo-500" target="_blank">{props.h2}</a>
            </div>
        </div>
    )
}
