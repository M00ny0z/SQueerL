import { useState, useEffect } from 'react';

const useAchievements = () => {
   const [achievements, setAchievements] = useState([]);

   /**
     * Makes an initial request of the users current goals and stores it for use
     */
    useEffect(() => {
      const requestAchievements = async () => {
         getAchievements();
      };

      requestAchievements();
   }, []);

   const getAchievements = async () => {
      // const response = await api('/api/achievements');
      const response = {
         data: [
            {
               name: "Tracking 3 Goals",

            },
            {
               name: "5 Day Streak"
            }, 
            {
               name: "10 Day Streak"
            }, 
            {
               name: "Joined a group with at least 5 people"
            }
         ]
      };
      const requestedAchievements = response.data;
      setAchievements(requestedAchievements);
   };

   return achievements;
};

export default useAchievements;