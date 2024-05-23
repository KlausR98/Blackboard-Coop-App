import React from 'react'
import { GiVacuumCleaner } from "react-icons/gi";

const UserBarButtonClean = ({ handleClearClick }) => {
    return (
        <li className='flex items-center space-x-2 justify-center my-2'>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 py-1.5 leading-6 shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClearClick}
            >
                <GiVacuumCleaner />
            </button>
        </li>
    )
}

export default UserBarButtonClean
