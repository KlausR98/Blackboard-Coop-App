import React from 'react'
import { FaArrowRotateRight } from "react-icons/fa6";

const UserBarButtonRedo = ({ handleRedoClick }) => {
    return (
        <li className='flex items-center space-x-2 justify-center my-2'>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-500 py-1.5 leading-6 shadow-sm hover:bg-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleRedoClick}
            >
                <FaArrowRotateRight />
            </button>
        </li>
    )
}

export default UserBarButtonRedo