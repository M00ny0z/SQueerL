import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GroupContext from './context/GroupContext';

import Home from './components/Home';
import Header from './components/Header';
import GoalView from './components/GoalView';
import ProfileView from './components/ProfileView';
import GlobalView from './components/GlobalView';
import Checkin from './components/Checkin';

const App = () => {
   const [selectedGroup, setSelectedGroup] = useState('');
   const [checkinStatus, setCheckinStatus] = useState(false);
   const updateSelected = (group) => setSelectedGroup(group);

   const renderApp = () => {
      if (!checkinStatus) {
         return <Checkin finish={() => setCheckinStatus(true)}/>;
      } else {
         return (
            <BrowserRouter>
               <Header />
               <GroupContext.Provider value={{selectedGroup, updateSelected}}>
                  <Route path="/" exact component={Home} />
                  <Route path="/global" exact component={GlobalView} />
                  <Route path="/profile" exact component={ProfileView} />
                  <Route path="/goal/" component={GoalView} />
               </GroupContext.Provider>
            </BrowserRouter>
         );
      }
   };

   return (
      <div>
         {
            renderApp()
         }
      </div>
   );
};

export default App;