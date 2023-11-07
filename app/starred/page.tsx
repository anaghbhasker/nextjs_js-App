"use client";
import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Page() {
    const [isStarred, setIsStarred] = useState(false);

    const toggleStar = () => {
        setIsStarred(!isStarred);
    };
    return (
        <div>
            <div  onClick={toggleStar}>{isStarred ? <AiFillStar style={{ color: '#FFCC5A',width:"100px",height:"100px" }} /> : <AiOutlineStar style={{width:"100px",height:"100px"}}/>}</div>
        </div>
    );
}
