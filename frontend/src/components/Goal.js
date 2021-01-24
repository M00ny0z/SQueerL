import React from 'react';
import '../styles/index.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Goal = (props) => {
   return (
      <div>
         <Card>
            <Card.Body>
               <p className="text-bold">{ props.name }</p>
               <p>{ props.body }</p>
               <p> addcode: { props.addcode }</p>
               <Button variant="primary">change timeframe</Button>
               <Button variant="link" href={"/squeerl/goal/" + props.addcode}>go to the page</Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Goal;