import React from 'react';

import Goal from './Goal';

const CurrentGoalList = () => {
   const data = [{
      name: "Walk a mile a day",
      "code": "XYZ123"
   },
   {
      name: "Walk the dog everyday",
      "code": "ABC123"
   },
   {
      name: "Go to the gym once a week",
      "code": "DFG123"
   },
   {
      name: "Get takeout ONLY once a week",
      "code": "JFK123"
   },
   {
      name: "Organize things",
      "code": "DYZ123"
   },{
      name: "Walk a mile a day",
      "code": "DOL123"
   },
   {
      name: "Walk a mile a day",
      "code": "THE123"
   }];

   const renderGoals = () => {
      return data.map(
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