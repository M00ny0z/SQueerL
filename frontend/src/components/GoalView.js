import React, { useContext, useEffect, useState } from 'react';
import useGroupProgress from '../hooks/useGroupProgress';
import GroupContext from '../context/GroupContext';
import useGoals from '../hooks/useGoals';
import '../styles/index.css';

import { HorizontalBar, Pie } from 'react-chartjs-2';

const GoalView = () => {
   const { selectedGroup, updateSelected } = useContext(GroupContext);
   const [groupState, getGroupState] = useGroupProgress();
   const goals = useGoals();

   useEffect(() => updateSelected({name: 'Walk a Mile a Day', code: "ZYX123" }), []);

   const renderBody = () => {
      if (groupState[selectedGroup.code]) {
         const groupInfo = groupState[selectedGroup.code];
         const options = {
            scales: {
               xAxes: [{
                   ticks: {
                       suggestedMin: 0
                   }
               }]
           }
         };

         const createBoostInfo = () => {
            const labelOutput = ["Your Progress"];
            const dataOutput = [groupInfo["user-progress"]];
            for (const member of groupInfo.members) {
               labelOutput.push(member.user);
               dataOutput.push(member.boost);
            }
            return [labelOutput, dataOutput];
         };

         const createDelayInfo = () => {
            const labelOutput = ["Your Progress"];
            const dataOutput = [groupInfo["user-progress"]];
            for (const member of groupInfo.members) {
               labelOutput.push(member.user);
               dataOutput.push(member.delay);
            }
            return [labelOutput, dataOutput];
         };

         const [boostLabelOutput, boostDataOutput] = createBoostInfo();
         const [delayLabelOutput, delayDataOutput] = createDelayInfo();

         const boostData = {
            labels: boostLabelOutput,
            datasets: [
              {
                label: 'Group Statistics',
                borderWidth: 1,
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: boostDataOutput,
                minBarLength: 2,
                hoverBackgroundColor: 'rgba(255,99,132,1)',
                backgroundColor: ["#16C79A", "#19456B"]
              }
            ]
         };

         const delayData = {
            labels: delayLabelOutput,
            datasets: [
              {
                label: 'Group Statistics',
                borderWidth: 1,
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: delayDataOutput,
                minBarLength: 2,
                hoverBackgroundColor: 'rgba(255,99,132,1)',
                backgroundColor: ["#16C79A", "#19456B"]
              }
            ]
         };

         const overallData = {
            labels: ["Total Boosts", "Total Delays"],
            datasets: [
              {
                label: 'Overall Statistics',
                borderWidth: 1,
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [groupInfo["total-boosts"], groupInfo["total-delays"]],
                minBarLength: 2,
                hoverBackgroundColor: 'rgba(255,99,132,1)',
                backgroundColor: ["#16C79A", "#19456B"]
              }
            ]
          };

         return (
            <div className="container">
               <h2 className="text-left">Overall Statistics</h2>
               <Pie data={overallData} width={100} height={50} />

               <h2 className="text-left">Boost Statistics</h2>
               <HorizontalBar data={boostData} width={100} height={50} options={options} />

               <h2 className="text-left">Delay Statistics</h2>
               <HorizontalBar data={delayData} width={100} height={50} options={options} />
            </div>
         )
      }
   };

   return (
      <div>
         <header>
            <h1 className="text-bold text-center">Goal: { selectedGroup.name }</h1>
            <h1 className="text-bold text-center">Add Code: { selectedGroup.code }</h1>
         </header>

         {
            renderBody()
         }
      </div>
   );
};

export default GoalView;