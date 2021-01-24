import React from 'react';
import useGoals from '../hooks/useGoals';

import Goal from './Goal';

const CurrentGoalList = () => {
   const goals = useGoals();

   const renderGoals = () => {
      return goals.map(
         (goal) => <Goal name={ goal.name } key={ goal["add-code"] } code={ goal["add-code"] } />
      );
   };

   return (
      <div className="d-flex flex-wrap">
         { renderGoals() }
      </div>
   );
};

export default CurrentGoalList;