import React from 'react';
import '../styles/index.css';

import Card from 'react-bootstrap/Card';

const Goal = (props) => {
   return (
      <div>
         <Card>
            <Card.Body>
               <p className="fw-bold text-bold">{ props.name }</p>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Goal;