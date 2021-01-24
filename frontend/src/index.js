/*
   Author: Emmanuel Munoz
   Date: January 2021

   Renders the top level app component in the root element of the page.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
   <App />,
   document.getElementById("root")
);
