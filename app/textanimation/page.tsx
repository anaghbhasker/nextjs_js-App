"use client"
import { useState, useEffect } from 'react';

const Page = () => {
  return (
    <>
      <Counter />
      <Counter />
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const counter = (minimum:any, maximum:any) => {
    setTimeout(() => {
      for (let i = minimum; i <= maximum; i++) {
        setTimeout(() => {
          setCount(i);
        }, 100 );
      }
    }, 0);
  };

  useEffect(() => {
    counter(0, 10000);
  }, []);

  return (
    <div>
      <h1 id="stats-number">{count}</h1>
    </div>
  );
};

export default Page;
