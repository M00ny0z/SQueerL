import React from 'react';
import useGoals from '../hooks/useGoals';

import Goal from './Goal';

const CurrentGoalList = () => {
   const goals = useGoals();

   const renderGoals = () => {
      return goals.map(
         (goal) => <Goal name={ goal.name } code={ goal.code } />
      );
   };

   return (
      <div>
         { renderGoals() }
      </div>
   );
};

export default CurrentGoalList;