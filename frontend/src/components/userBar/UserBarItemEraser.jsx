import React from 'react'

const UserBarItemEraser = ({ tool, setTool }) => {
  return (
    <li className='flex items-center space-x-2 justify-center my-2'>
      <label htmlFor="eraser">🧽</label>
      <input
        type="radio"
        name={tool}
        id="eraser"
        checked={tool === "eraser"}
        value="eraser"
        onChange={(e) => setTool(e.target.value)}
      />
    </li>
  )
}

export default UserBarItemEraser