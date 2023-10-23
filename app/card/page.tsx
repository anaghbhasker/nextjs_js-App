"use client";
import React, { useState } from "react";
import "./style.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularChart: React.FC = () => {
    const [percentage, setPercentage] = useState<number>(75);
    return (
        <div>
            <div className="card-row">
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
            </div>
            <div className="card-row">
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
                <div className="card">
                    <div className="top-right">Top Right</div>
                    <div className="center">
                        <div className="circular-progress">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="bottom-left">Bottom Left</div>
                </div>
            </div>
        </div>
    );
};

export default CircularChart;
