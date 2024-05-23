import { useState, useRef } from "react"
import * as React from 'react';
import Blackboard from "../../components/blackboard/Blackboard"
import UserBar from "../../components/userBar/UserBar"

const styles = {
    cursor: "url('../../../public/pen.svg'), auto"
};


const RoomPage = () => {

    const canvasRef = useRef(null);
    const [eraseMode, setEraseMode] = useState(false);

    const handleEraserClick = () => {
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
    };

    const handlePenClick = () => {
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
    };

    const handleUndoClick = () => canvasRef.current?.undo();
    const handleRedoClick = () => canvasRef.current?.redo();
    const handleClearClick = () => canvasRef.current?.clearCanvas();

    const [isOpen, setIsOpen] = useState(false);
    const userBarRef = useRef(null);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("#ffffff");


    return (
        <div>

            {/* Sidebar */}
            <UserBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                userBarRef={userBarRef}
                isButtonVisible={isButtonVisible}
                setIsButtonVisible={setIsButtonVisible}
                tool={tool} setTool={setTool} color={color} setColor={setColor}
                handleClearClick={handleClearClick}
                handleRedoClick={handleRedoClick}
                handleUndoClick={handleUndoClick}
                eraseMode={eraseMode}
                handlePenClick={handlePenClick}
                handleEraserClick={handleEraserClick}
            />

            {/* Blackboard */}
            <Blackboard
                style={styles}
                color={color}
                handleClearClick={handleClearClick}
                handleRedoClick={handleRedoClick}
                handleUndoClick={handleUndoClick}
                eraseMode={eraseMode}
                handlePenClick={handlePenClick}
                handleEraserClick={handleEraserClick}
                canvasRef={canvasRef}
            />

        </div>
    );
};

export default RoomPage;



