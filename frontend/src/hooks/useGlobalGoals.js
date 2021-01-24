import { useState, useEffect } from 'react';

const useGlobalGoals = () => {
   const [globalGoals, setGlobalGoals] = useState([]);

   /**
     * Makes an initial request of the users current goals and stores it for use
     */
   useEffect(() => {
      const requestGlobalGoals = async () => {
         getGlobalGoals();
      };

      requestGlobalGoals();
   }, []);

   /**
     * Makes a GET request to the API for the users' goals
     * TODO: Once API/Backend is up, make an actual request
     * NOTE: Uses fake data until API/Backend is up
     */
    const getGlobalGoals = async () => {
      //const response = await api('/members');
      const response = {
         data: [{
            name: "Start/Write in a positivity journal",
            "add-code": "POS247"
         },
         {
            name: "Reflect on your day",
            "add-code": "YOU123"
         },
         {
            name: "Take a walk for 30 minutes",
            "add-code": "WLK333"
         },
         {
            name: "Meditate for 30 minutes",
            "add-code": "MED333"
         },
         {
            name: "Volunteer for a local organization",
            "add-code": "VOL247"
         }]
      };
      const requestedGlobalGoals = response.data;
      setGlobalGoals(requestedGlobalGoals);
   };

   return globalGoals;
};

export default useGlobalGoals;