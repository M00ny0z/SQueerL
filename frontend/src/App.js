import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home}/>
         </BrowserRouter>
      </div>
   );
};

export default App;