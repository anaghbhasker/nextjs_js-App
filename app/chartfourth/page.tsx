import React from 'react'
import CircularProgressBar from './circularProgress'

const Home: React.FC = () => {
    return (
      <div>
        <h1>Circular Progress Bar Example</h1>
        <CircularProgressBar percentage={75} /> {/* Set the desired percentage */}
      </div>
    );
  };
  
  export default Home;