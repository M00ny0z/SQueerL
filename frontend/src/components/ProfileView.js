import React, { useState } from 'react';
import Faker from 'faker';
import useAchievements from '../hooks/useAchievements';

import Identifier from './Identifier';
import Achievement from './Achievement';

const ProfileView = () => {
   const achievements = useAchievements();

   const renderAchievements = () => {
      return achievements.map(
         (achievement) => <Achievement name={ achievement.name } />
      );
   };

   return (
      <div className="d-flex flex-column align-items-center container">
         <h1>My Profile</h1>
         <Identifier />
         <div className="d-flex w-100 flex-column align-items-center border title-border pb-3 pl-3 pr-3 mt-3">
            <h2 className="text-left w-100">Achievements</h2>
            <div className="d-flex flex-wrap">
               {
                  renderAchievements() 
               }
            </div>
         </div>
      </div>
   );
};

export default ProfileView;