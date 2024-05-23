import React from 'react'

const UserBarItemLine = ({ tool, setTool }) => {
    return (
        <li className='flex items-center space-x-2 justify-center my-2'>
            <label htmlFor="line">───</label>
            <input
                type="radio"
                name={tool}
                id="line"
                checked={tool === "line"}
                value="line"
                onChange={(e) => setTool(e.target.value)}
            />
        </li>

    )
}

export default UserBarItemLine