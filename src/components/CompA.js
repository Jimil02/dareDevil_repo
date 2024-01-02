import React from 'react';
import ComponentB from './CompB';
import ComponentC from './CompC';
import './Styles.css';

const ComponentA = () => {
  return (
    <div className="container">
      <div className="component">
        <h2>Component A:</h2>
        <ComponentB />
      </div>
      <div className="component">
        <label>Component C:</label>
        <ComponentC />
      </div>
    </div>
  );
};

export default ComponentA;