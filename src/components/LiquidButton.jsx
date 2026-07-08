import React from 'react';

const LiquidButton = ({ children, className, liquidColor = "bg-white/20", ...props }) => {
  return (
    <button 
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2 w-full h-full pointer-events-none">
        {children}
      </span>
      
      {/* Liquid Wave Effect */}
      <div 
        className={`absolute top-[120%] left-[-50%] w-[200%] h-[200%] rounded-[40%] ${liquidColor} transition-all duration-700 ease-in-out group-hover:top-[-50%] group-hover:[animation:liquid-wave_3s_infinite_linear] z-0 pointer-events-none`}
      ></div>
    </button>
  );
};

export default LiquidButton;
