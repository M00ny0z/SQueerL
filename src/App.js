import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GroupContext from './context/GroupContext';

import Home from './components/Home';
import Header from './components/Header';
import GoalView from './components/GoalView';
import ProfileView from './components/ProfileView';
import GlobalView from './components/GlobalView';
import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
   const [selectedGroup, setSelectedGroup] = useState('');
   const updateSelected = (group) => setSelectedGroup(group);

   return (
      <div>
         <BrowserRouter>
            <Header />
            <GroupContext.Provider value={{selectedGroup, updateSelected}}>
               <Route path="/" exact component={Home} />
               <Route path="/global" exact component={GlobalView} />
               <Route path="/profile" exact component={ProfileView} />
               <Route path="/goal/" component={GoalView} />
            </GroupContext.Provider>
         </BrowserRouter>
      </div>
   );
};

export default withAuthenticator(App);