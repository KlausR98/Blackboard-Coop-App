import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef, useState } from "react";


const Blackboard = ({ style, canvasRef, color, handleUndoClick, handleRedoClick, handleClearClick }) => {


  return (
    <div>
      <h1 className=" fixed inset-x-1/4 top-0 text-3xl font-bold text-white pb-2">
        Black Board Sharing App by Szymon😎🖊️
        <span className="text-2xl">[Użytkownicy Online: 0]</span>
      </h1>

      <div className=" w-[200vw] h-[200vh] mt-2 border-[1px] border-white">
        <ReactSketchCanvas
          ref={canvasRef}
          style={style}
          strokeWidth={4}
          backgroundImage="#000000"
          strokeColor={color}
          handleUndoClick={handleUndoClick}
          handleRedoClick={handleRedoClick}
          handleClearClick={handleClearClick}
        />
      </div>
    </div>
  )
}

export default Blackboard