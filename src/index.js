import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import ReactElem from './modules/React-elems'; // реакт элементы разными способами
import MyComponent from './modules/React-components';  // реакт компоненты разными способами

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
    {/* <ReactElem/> */}
    {/* <MyComponent/> */}
  </StrictMode>
);
