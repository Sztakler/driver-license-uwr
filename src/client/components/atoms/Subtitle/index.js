import React, { useState } from "react";


function Subtitle({ children, ...props}) {
    return (
        <div className="text-base
        text-overflow
        text-[#0d0d0d]
        h-[140px]
        max-w-subtitle" {...props} >{children}</div>
    );
}

export default Subtitle;
