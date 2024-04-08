// import { useState } from 'react';
import { useEffect, useRef } from 'react';
import UserBar from "../userBar/UserBar"

const Blackboard = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return (
        <div className="h-screen w-full relative">
            <UserBar />
            <div className="w-full h-full mt-2 border-[1px] border-white ">
                <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} id="canvas"></canvas>
            </div>
        </div>
    )
}

export default Blackboard
