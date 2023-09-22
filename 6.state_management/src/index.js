import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Child2parent from './Child2parent';
import Child2child from './Child2child'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Child2parent />
    <Child2child />
  </React.StrictMode>
);
