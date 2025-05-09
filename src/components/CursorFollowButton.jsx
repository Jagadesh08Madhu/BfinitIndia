import React, { useState, useEffect } from 'react';
import { GoRocket } from "react-icons/go";

const CursorFollowButton = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [style, setStyle] = useState({ left: '0px', top: '0px' });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setCursorPosition({ x: mouseX, y: mouseY });

      // Smooth transition logic using a small delay for smoothness
      const smoothX = cursorPosition.x + (mouseX - cursorPosition.x) * 0.3;
      const smoothY = cursorPosition.y + (mouseY - cursorPosition.y) * 0.3;

      setStyle({
        left: `${smoothX}px`,
        top: `${smoothY}px`,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorPosition]); // Re-run effect when cursor position updates

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        <a
          href="#"
          className="absolute pointer-events-none transition-all transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#08B0F6] via-[#08b5f7] to-[#066EEB] w-[10px] h-[10px] rounded-full"
          style={{
            left: style.left,
            top: style.top,
            transition: 'left 0.1s ease-out, top 0.1s ease-out', // Add smooth transition effect
          }}
        >
          {/* <GoRocket className="text-white text-3xl" /> */}
        </a>
      </div>
    </>
  );
};

export default CursorFollowButton;
