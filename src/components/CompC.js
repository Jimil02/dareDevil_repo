import React from 'react';
import { useSelector } from 'react-redux';
import './Styles.css';


const ComponentC = () => {
  // Get the value from the Redux store
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <div className="component">
      <label>Value from Component B:</label>
      <p>{inputValue}</p>
    </div>
  );
};

export default ComponentC;