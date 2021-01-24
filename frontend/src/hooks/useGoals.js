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
            name: "Walk a mile a day",
            "add-code": "XYZ123"
         },
         {
            name: "Walk the dog everyday",
            "add-code": "ABC123"
         },
         {
            name: "Go to the gym once a week",
            "add-code": "DFG123"
         },
         {
            name: "Get takeout ONLY once a week",
            "add-code": "JFK123"
         },
         {
            name: "Organize things",
            "add-code": "DYZ123"
         },{
            name: "Walk a mile a day",
            "add-code": "DOL123"
         },
         {
            name: "Walk a mile a day",
            "add-code": "THE123"
         }]
      };
      const requestedGoals = response.data;
      setGoals(requestedGoals);
   };

   return goals;
};

export default useGoals;