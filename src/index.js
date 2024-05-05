import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactElem from './modules/React-elems'; // реакт элементы разными способами
import MyComponent from './modules/React-components';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <ReactElem/> */}
  <MyComponent/>
    {/* <App /> */}
  </React.StrictMode>
);
