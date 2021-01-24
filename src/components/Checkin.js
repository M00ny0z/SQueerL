import React from 'react';
import useGoals from '../hooks/useGoals';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkin = (props) => {
   const goals = useGoals();

   const renderChecks = () => {
      return goals.map((goal) => {
         return (
            <div className="border rounded mt-3 p-3">
               <h1>{ goal.name }</h1>

               <div className="d-flex justify-content-between align-items-center border rounded bg-success ">
                  <div className="d-flex align-items-center" 
                    style={{height: '4rem'}}
                  >
                     <i class="fas fa-arrow-right fa-3x ml-2 mr-2"></i>
                     <span> Boost </span>
                  </div>
                  <Form.Check
                     type="radio"
                     name={`check-${goal["add-code"]}`}
                     id={`check-${goal["add-code"]}-boost`}
                  />
               </div>

               <div className="d-flex justify-content-between align-items-center border rounded bg-secondary ">
                  <div className="d-flex align-items-center" 
                    style={{height: '4rem'}}
                  >
                     <i class="fas fa-arrow-left fa-3x ml-2 mr-2"></i>
                     <span> Delay </span>
                  </div>
                  <Form.Check
                     type="radio"
                     name={`check-${goal["add-code"]}`}
                     id={`check-${goal["add-code"]}-delay`}
                  />
               </div>
            </div>
         );
      });
   };

   return (
      <div className="container w-50 d-flex flex-column align-items-center">
         <div>
            {
               renderChecks()
            }
         </div>
         <Button variant="primary" onClick={props.finish} className="mt-3 mb-3">Submit</Button>
      </div>
   );
};

export default Checkin;