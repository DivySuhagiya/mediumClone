import React from "react";

const TooltipWrapper = ({ tooltip, children }) => {
  return (
    <div className="relative flex justify-center group">
      {/* Tooltip */}
      <div className="absolute -top-12 bg-[#242424] text-white text-xs px-2 py-2 rounded 
                      opacity-0 group-hover:opacity-100 transition 
                      whitespace-nowrap z-10">
        {tooltip}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 
                        border-l-6 border-r-6 border-t-6 
                        border-l-transparent border-r-transparent border-t-black" />
      </div>

      {/* Icon/Button */}
      <span className="cursor-pointer">{children}</span>
    </div>
  );
};

export default TooltipWrapper;
