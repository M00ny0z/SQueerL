import React from 'react';
import '../styles/index.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Goal = (props) => {
   return (
      <div>
         <Card>
            <Card.Body>
               <p className="text-bold">{ props.name }</p>
               <p>{ props.body }</p>
               <p> addcode: { props.addcode }</p>
               <Button variant="link" href={"/squeerl/goal/" + props.addcode}>go to the page</Button>
               <DropdownButton id="dropdown-basic-button" title="Change timeframe">
                  <Dropdown.Item href="#/action-1">Once a day</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Once a week</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Every other day</Dropdown.Item>
               </DropdownButton>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Goal;