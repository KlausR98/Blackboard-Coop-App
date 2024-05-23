import React from 'react'

const UserBarItemColor = ({ color, tool, setColor }) => {
  return (
    <li className='flex items-center space-x-2 justify-center my-2'>
      <label htmlFor="color">Kolor:</label>
      <input
        type="color"
        id="color"
        name={tool}
        checked={tool === "color"}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </li>
  )
}

export default UserBarItemColor