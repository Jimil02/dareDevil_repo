import React from 'react';
import { useDispatch } from 'react-redux';
import './Styles.css';


const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    dispatch({ type: 'UPDATE_INPUT', payload: inputValue });
  };

  return (
    <div className="component">
      <label>Component B:</label>
      <label>Input Field:</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;