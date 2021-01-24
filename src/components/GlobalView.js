import React from 'react';
import useGlobalGoals from '../hooks/useGlobalGoals';

import Goal from './Goal';

const GlobalView = () => {
   const globalGoals = useGlobalGoals();

   const renderGoals = () => {
      return globalGoals.map(
         (goal) => <Goal name={ goal.name } 
                         key={ goal["add-code"] } 
                         code={ goal["add-code"] } 
                         global={ true }
                   />
      );
   };

   return (
      <div className="container d-flex flex-column align-items-center">
         <h1>Global Goals</h1>
         <div className="d-flex flex-wrap">
         {
            renderGoals()
         }
         </div>
      </div>
   );
};

export default GlobalView;