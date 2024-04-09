import { useState, useRef, useEffect } from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { GiVacuumCleaner } from "react-icons/gi";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";


const UserBar = () => {

    // Logika otwierania i zamykania sidebaru
    const [isOpen, setIsOpen] = useState(false);
    const userBarRef = useRef(null);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userBarRef.current && !userBarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userBarRef]);

    useEffect(() => {
        if (isOpen) {
            const timeoutId = setTimeout(() => {
                setIsButtonVisible(true);
            }, 300);
            return () => clearTimeout(timeoutId);
        } else {
            setIsButtonVisible(false);
        }
    }, [isOpen]);

    // Logika przycisków sidebaru
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("#ffffff");

    return (
        <div>
            {/* Przycisk Otwierania Sidebaru */}
            <div className="left-0 inset-y-1/2 fixed">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full justify-center rounded-md 
                bg-indigo-600 p-4
                 shadow-sm hover:bg-indigo-500 
                focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
                >
                    <HiArrowSmallRight />
                </button>

                {/* Sidebar */}
                <div className={`userBar transform inset-y-0 left-0 w-64 bg-stone-600 
                    rounded-sm fixed overflow-auto ease-in-out transition-all 
                    duration-300 z-30 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                    {isOpen && (
                        <div ref={userBarRef} className='userBar'>
                            <div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-white">Narzędzia</h2>
                                    <ul className="mt-4 text-white text-lg font-semibold">
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="pencil" >✏️</label>
                                            <input
                                                type="radio"
                                                name={tool}
                                                id="pencil"
                                                checked={tool === "pencil"}
                                                value="pencil"
                                                onChange={(e) => setTool(e.target.value)}
                                            />
                                        </li>
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="line" >───</label>
                                            <input
                                                type="radio"
                                                name={tool}
                                                id="line"
                                                checked={tool === "line"}
                                                value="line"
                                                onChange={(e) => setTool(e.target.value)}
                                            />
                                        </li>
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="eraser" >🧽</label>
                                            <input
                                                type="radio"
                                                name={tool}
                                                id="eraser"
                                                checked={tool === "eraser"}
                                                value="eraser"
                                                onChange={(e) => setTool(e.target.value)}
                                            />
                                        </li>
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="rectangle" >⬜</label>
                                            <input
                                                type="radio"
                                                name={tool}
                                                id="rectangle"
                                                checked={tool === "rectangle"}
                                                value="rectangle"
                                                onChange={(e) => setTool(e.target.value)}
                                            />
                                        </li>
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="circle" >⚪</label>
                                            <input
                                                type="radio"
                                                name={tool}
                                                id="circle"
                                                checked={tool === "circle"}
                                                value="circle"
                                                onChange={(e) => setTool(e.target.value)}
                                            />
                                        </li>
                                        <li className=' flex items-center space-x-2 justify-center my-2'>
                                            <label htmlFor="color" >Kolor:</label>
                                            <input
                                                type="color"
                                                id="color"
                                                name={tool}
                                                checked={tool === "color"}
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                            />
                                        </li>
                                        {/* <li className=' flex items-center space-x-2 justify-center my-2'>
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
                            </li> */}
                                        <li
                                            className=' flex items-center space-x-2 justify-center my-2'
                                        >
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center 
                                    rounded-md bg-indigo-600 py-1.5 leading-6 
                                     shadow-sm hover:bg-indigo-500 
                                    focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 
                                     focus-visible:outline-indigo-600"
                                            >
                                                <FaArrowRotateLeft />
                                            </button>
                                        </li>
                                        <li
                                            className=' flex items-center space-x-2 justify-center my-2'
                                        >
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center 
                                    rounded-md bg-stone-500 py-1.5  leading-6  
                                    shadow-sm hover:bg-stone-400 
                                    focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600"
                                            >
                                                <FaArrowRotateRight />
                                            </button>
                                        </li>
                                        <li
                                            className=' flex items-center space-x-2 justify-center my-2'
                                        >
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-red-600  
                py-1.5 leading-6  shadow-sm  hover:bg-red-400 
                focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                <GiVacuumCleaner />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Zamykanie sidebaru */}
                {isButtonVisible && (
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`inset-y-1/2 left-64 
                             justify-center items-center rounded-md 
                            bg-indigo-600 px-4 py-6 flex
                             shadow-sm hover:bg-indigo-500 
                            focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 
                            focus-visible:outline-indigo-600 z-30
                            ${isOpen ? 'fixed' : 'hidden'}`}
                    >
                        <HiArrowSmallLeft />
                    </button>
                )}
            </div>
        </div >
    )
}

export default UserBar