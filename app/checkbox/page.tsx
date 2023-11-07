"use client"
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function MainPage() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={selectAll}
        onChange={handleSelectAll}
      />
      Select All
      <ChildComponent selectAll={selectAll} />
    </div>
  );
}

export default MainPage;