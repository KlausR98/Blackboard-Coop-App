import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const UserBarOpenButton = ({ setIsOpen, isOpen }) => {
    return (

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full justify-center rounded-md bg-indigo-600 p-4 
                    shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
        >
            <HiArrowSmallRight />
        </button>

    )
}

export default UserBarOpenButton