import React from 'react';
import '../styles/index.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Goal = (props) => {
   return (
      <Card key={props.code} className="mb-3 mr-3" style={{ height: '10rem', width: '15rem' }}>
         <Card.Body className="d-flex flex-column align-items-center justify-content-between">
            <header>
               <Card.Title className="text-center">{ props.name }</Card.Title>
               <Card.Subtitle className="mb-2 text-center">Add Code: { props.code }</Card.Subtitle>
            </header>

            <DropdownButton id="dropdown-basic-button" title="Change Frequency">
               <Dropdown.Item href="#/action-1">Once a day</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Once a week</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Every other day</Dropdown.Item>
            </DropdownButton>
         </Card.Body>
      </Card>
   );
};

export default Goal;