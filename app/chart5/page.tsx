"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PercentageCounter: React.FC = () => {
    const [percentage, setPercentage] = useState<number>(75);
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ width: 150, marginLeft: 550 }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                    })}
                />
            </div>
        </div>
    );
};

export default PercentageCounter;
