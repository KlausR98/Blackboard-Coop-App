import React from 'react'
import { FaArrowRotateLeft } from "react-icons/fa6";

const UserBarButtonUndo = ({ handleUndoClick }) => {
  return (
    <li className='flex items-center space-x-2 justify-center my-2'>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md 
          bg-indigo-600 py-1.5 leading-6 shadow-sm hover:bg-indigo-500 
          focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleUndoClick}
      >
        <FaArrowRotateLeft />
      </button>
    </li>
  )
}

export default UserBarButtonUndo