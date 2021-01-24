import { useState, useEffect } from 'react';

const useGroupProgress = () => {
   const [progressState, setProgressState] = useState({});

   useEffect(() => getGroupInfo("xyz"), []);

   const getGroupInfo = async (code) => {
      //const response = await api(`/group/${code}`);
      const response = {
         data: {
                  code: "ZYX123",
                  "total-boosts": 10,
                  "total-delays": 2,
                  "user-progress": 3,
                  members: [
                     {
                        user: "Enigmatic Elephant",
                        percentage: 30
                     },
                     {
                        user: "Dancing Dino",
                        percentage: 59
                     },
                     {
                        user: "Manic Money",
                        percentage: 70
                     },
                  ]
         }
      };
      const groupInfo = await response.data;
      setProgressState({...progressState, [groupInfo.code]: groupInfo});
   };

   return [progressState, getGroupInfo];
};

export default useGroupProgress;