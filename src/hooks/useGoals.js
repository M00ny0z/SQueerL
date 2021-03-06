import { useState, useEffect } from 'react';

const useGoals = () => {
   const [goals, setGoals] = useState([]);

   /**
     * Makes an initial request of the users current goals and stores it for use
     */
   useEffect(() => {
      const requestGoals = async () => {
         getGoals();
      };

      requestGoals();
   }, []);

   /**
     * Makes a GET request to the API for the users' goals
     * TODO: Once API/Backend is up, make an actual request
     * NOTE: Uses fake data until API/Backend is up
     */
    const getGoals = async () => {
      //const response = await api('/members');
      const response = {
         data: [{
            name: "Walk a mile",
            "add-code": "XYZ123"
         },
         {
            name: "Walk the dog",
            "add-code": "ABC123"
         },
         {
            name: "Go to the gym",
            "add-code": "DFG123"
         },
         {
            name: "Meditate",
            "add-code": "JFK123"
         },
         {
            name: "Write in Reflection Journal",
            "add-code": "DYZ123"
         }]
      };
      const requestedGoals = response.data;
      setGoals(requestedGoals);
   };

   return goals;
};

export default useGoals;