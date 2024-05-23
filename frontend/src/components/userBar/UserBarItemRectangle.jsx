import React from 'react'

const UserBarItemRectangle = ({ tool, setTool }) => {
  return (
    <li className='flex items-center space-x-2 justify-center my-2'>
      <label htmlFor="rectangle">⬜</label>
      <input
        type="radio"
        name={tool}
        id="rectangle"
        checked={tool === "rectangle"}
        value="rectangle"
        onChange={(e) => setTool(e.target.value)}
      />
    </li>
  )
}

export default UserBarItemRectangle
