import { useState } from 'react';

const UserBar = () => {

    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("#ffffff");
    // zrobić rozwijany sidebar z w userbar 
    return (
        <div className="fixed inset-x-0 bottom-1 flex gap-3 w-full mx-auto items-center" >
            < div className="flex gap-1" >
                <label htmlFor="pencil" >Ołówek</label>
                <input
                    type="radio"
                    name={tool}
                    id="pencil"
                    checked={tool === "pencil"}
                    value="pencil"
                    onChange={(e) => setTool(e.target.value)}
                />
            </div >
            <div className="flex gap-1">
                <label htmlFor="rubber" >Gumka</label>
                <input
                    type="radio"
                    name={tool}
                    id="rubber"
                    checked={tool === "rubber"}
                    value="rubber"
                    onChange={(e) => setTool(e.target.value)}
                />
            </div>
            <div className="flex gap-1">
                <label htmlFor="line" >Linia</label>
                <input
                    type="radio"
                    name={tool}
                    id="line"
                    checked={tool === "line"}
                    value="line"
                    onChange={(e) => setTool(e.target.value)}
                />
            </div>
            <div className="flex gap-1">
                <label htmlFor="rect" >Kwadrat</label>
                <input
                    type="radio"
                    id="rect"
                    checked={tool === "rect"}
                    name={tool}
                    value="rect"
                    onChange={(e) => setTool(e.target.value)}
                />
            </div>
            {/* <div className="flex gap-1">
                <label htmlFor="pencil" >Grubość:</label>
                <input
                    type="range"
                    min="1"
                    max="20"
                    id="lineWidthInput"
                    name="tool"
                    value={lineWidth}
                    onChange={(e) => setLineWidth(e.target.value)}
                />
            </div> */}
            <div className="flex gap-1">
                <label htmlFor="color" >Kolor:</label>
                <input
                    type="color"
                    id="color"
                    name={tool}
                    checked={tool === "color"}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Undo
            </button>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Redo
            </button>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Wyczyść
            </button>
        </div >
    )
}

export default UserBar