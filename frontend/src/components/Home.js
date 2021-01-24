import React from 'react';

import Goal from './Goal';
const Home = () => {
   return (
      <div className="container">
         <Goal name="Walk for an Hour" body="enjoy some fresh air!" addcode="coolwalk"/>
      </div> 
   );
};

export default Home;