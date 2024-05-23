import { useState, useRef, useEffect } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import UserBarOpenButton from "./UserBarOpenButton"
import UserBarItemPencil from './UserBarItemPencil';
import UserBarItemLine from './UserBarItemLine';
import UserBarItemEraser from './UserBarItemEraser';
import UserBarItemRectangle from "./UserBarItemRectangle";
import UserBarItemCircle from "./UserBarItemCircle";
import UserBarItemColor from "./UserBarItemColor";
import UserBarButtonUndo from "./UserBarButtonUndo";
import UserBarButtonRedo from "./UserBarButtonRedo"
import UserBarButtonClean from "./UserBarButtonClean";



const UserBar = ({ color, setColor, handleUndoClick, handleRedoClick,
    handleClearClick, handlePenClick, handleEraserClick, eraseMode }) => {

    // SideBar opening logic
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
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen) {
            const timeoutId = setTimeout(() => setIsButtonVisible(true), 300);
            return () => clearTimeout(timeoutId);
        } else {
            setIsButtonVisible(false);
        }
    }, [isOpen]);

    return (
        <div>
            <div className="left-0 inset-y-1/2 fixed">
                <UserBarOpenButton
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                />
                <div className={`userBar transform inset-y-0 left-0 w-64 bg-stone-600 
                rounded-sm fixed overflow-auto ease-in-out transition-all 
                duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    {isOpen && (
                        <div ref={userBarRef} className='userBar'>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-white">Narzędzia</h2>
                                <ul className="mt-4 text-white text-lg font-semibold">
                                    <UserBarItemPencil
                                        disabled={!eraseMode}
                                        onClick={handlePenClick}
                                    />
                                    <button>
                                        <select name="liczba">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </button>
                                    <UserBarItemLine

                                    />
                                    <UserBarItemEraser
                                        disabled={eraseMode}
                                        onClick={handleEraserClick}
                                    />
                                    <UserBarItemRectangle

                                    />
                                    <UserBarItemCircle

                                    />
                                    <UserBarItemColor
                                        setColor={setColor}
                                        color={color}
                                    />
                                    <UserBarButtonUndo
                                        handleUndoClick={handleUndoClick}
                                    />
                                    <UserBarButtonRedo
                                        handleRedoClick={handleRedoClick}
                                    />
                                    <UserBarButtonClean
                                        handleClearClick={handleClearClick}
                                    />
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {isButtonVisible && (
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`inset-y-1/2 left-64 justify-center items-center 
                        rounded-md bg-indigo-600 px-4 py-6 flex shadow-sm
                         hover:bg-indigo-500 focus-visible:outline 
                         focus-visible:outline-2 focus-visible:outline-offset-2 
                         focus-visible:outline-indigo-600 z-30 ${isOpen ? 'fixed' : 'hidden'}`}
                    >
                        <HiArrowSmallLeft />
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserBar;
