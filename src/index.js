import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';

import ReactElem from './modules/React-elems'; // реакт элементы разными способами
import MyComponent from './modules/React-components';  // реакт компоненты разными способами
import WhoAmI from './modules/Propses';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>

    {/* <ReactElem/> */}
    {/* <MyComponent/> */}
    <WhoAmI name='Kostya' surename={{secondName: "Smith"}} link={() => {return "telegramm.com"}}/>
    <WhoAmI name='Alex' surename={{secondName: "Shepard"}} link={() => {return "youtube.com"}}/>
  </StrictMode>
);
