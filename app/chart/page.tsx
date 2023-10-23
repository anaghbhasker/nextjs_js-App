"use client";
import React from "react";
import DonutChart from "react-donut-chart";

export default function Page() {
    return (
        <div>
            <DonutChart
                data={[
                    {
                        label: "Give you up",
                        value: 20,
                    },
                    {
                        label: "balance",
                        value: 80    ,
                        isEmpty: false,
                    },
                ]}
            />
            
        </div>
    );
}
