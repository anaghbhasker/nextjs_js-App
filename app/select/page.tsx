"use client";
import React from "react";
import Select from "react-select";

const customSelectStyle = {
    container: (provided: any) => ({
      ...provided,
      pointerEvents: 'none', // Disable user interaction
      backgroundColor: '#CACACA',
    }),
  };
export default function Page() {
    return (
        <div>
            <Select
                // options={[fixedValue]} // Use an array with the fixed value
                // value={fixedValue}
                styles={customSelectStyle}
                isSearchable={false} // Hide the search input
                isDisabled={true} // Disable the select
            />
        </div>
    );
}
