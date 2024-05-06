import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';

import ReactElem from './modules/React-elems'; // реакт элементы разными способами
import MyComponent from './modules/React-function-components';  // реакт компоненты разными способами
import WhoAmI from './modules/Propses';  // Объект реакт props и способы его передачи
import AboutMe from './modules/React-class-components'; // функциональный реакт компонент с состоянием
// import Counter from './modules/Counter/counter'; // счётчик для отработки изменения состояния


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>

    {/* <ReactElem/> */}
    {/* <MyComponent/> */}
    {/* <WhoAmI name='Kostya' surename={{secondName: "Smith"}} link={() => {return "telegramm.com"}}/> */}
    {/* <WhoAmI name='Alex' surename={{secondName: "Shepard"}} link={() => {return "youtube.com"}}/> */}
    {/* <AboutMe name="Kostya" surename="Voronkov" link="youtube.com" /> */}
    {/* <AboutMe name="Alex" surename="Doxer" link="vk.com" /> */}
    {/* <Counter counter={0}/> */}
  </StrictMode>
);
