import React from 'react'

const UserBarItemPencil = ({ tool, setTool }) => {
    return (

        <li className='flex items-center space-x-2 justify-center my-2'>
            <label htmlFor="pencil">✏️</label>
            <input
                type="radio"
                name={tool}
                id="pencil"
                checked={tool === "pencil"}
                value="pencil"
                onChange={(e) => setTool(e.target.value)}
            />
        </li>

    )
}

export default UserBarItemPencil