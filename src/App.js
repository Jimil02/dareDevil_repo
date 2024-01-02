import React from 'react';
import { Provider } from 'react-redux';
import ComponentA from './components/CompA';
import store from './components/Store';
import './components/Styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="container">React Redux Example</h1>
        <ComponentA />
      </div>
    </Provider>
  );
};

export default App;