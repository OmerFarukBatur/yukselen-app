import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter ,Routes, Route } from 'react-router-dom';


import '../src/app-file/favicon.ico';
import '../src/app-file/css/bootstrap.css';
import '../src/app-file/css/bootstrap-responsive.min.css';
import '../src/app-file/css/bootstrap-responsive.min.css';
import '../src/app-file/css/font-awesome.min.css';
/* import '../src/app-file/css/font-awesome-corp.css'; */
/* import '../src/app-file/css/font-awesome-ext.css'; 
import '../src/app-file/css/font-awesome-social.css';*/
import '../src/app-file/css/menu/core.css';
import '../src/app-file/css/menu/styles/lwhite.css';
import '../src/app-file/css/menu/effects/fading.css';
import '../src/app-file/css/menu/effects/slide.css';

import '../src/app-file/css/animate.min.css';
import '../src/app-file/css/prettify.css';
/* import '../src/app-file/css/docs.css'; */
import '../src/app-file/css/prettyPhoto.css';
/* import '../src/app-file/css/main.css'; */
import '../src/app-file/css/skins/white.css';
import '../src/app-file/css/ie.css';
import '../src/app-file/css/font-awesome-ie7.min.css';
import '../src/app-file/css/font-awesome-more-ie7.min.css';
import '../src/app-file/css/ie.css';

import '../src/app-file/images/favicons/apple-icon-57x57.png';
import '../src/app-file/images/favicons/apple-icon-60x60.png';
import '../src/app-file/images/favicons/apple-icon-72x72.png';
import '../src/app-file/images/favicons/apple-icon-76x76.png';
import '../src/app-file/images/favicons/apple-icon-114x114.png';
import '../src/app-file/images/favicons/apple-icon-120x120.png';
import '../src/app-file/images/favicons/apple-icon-144x144.png';
import '../src/app-file/images/favicons/apple-icon-152x152.png';
import '../src/app-file/images/favicons/apple-icon-180x180.png';
import '../src/app-file/images/favicons/android-icon-192x192.png';
import '../src/app-file/images/favicons/favicon-32x32.png';
import '../src/app-file/images/favicons/favicon-96x96.png';
import '../src/app-file/images/favicons/favicon-16x16.png';



import App from './App';
import reportWebVitals from './reportWebVitals';
import BaseForm from './layout/SubdoshaForms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <BaseForm /> }>
        <Route path="/subdosha" element={ <App />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
