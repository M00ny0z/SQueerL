import React from 'react';
import CurrentGoalList from './CurrentGoalList';
import AddGoalModal from './AddGoalModal'

const Home = () => {
   return (
      <div className="container">
         <AddGoalModal />
         <CurrentGoalList />
      </div> 
   );
};

export default Home;