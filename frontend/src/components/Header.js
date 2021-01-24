/*
   Author: Emmanuel Munoz
   Date: November 2020

   Displays the static header of the SQueerL website. Includes the logo and links to the other parts of the website.
*/
import React, { useState } from 'react';
import '../styles/index.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Header = () => {

   const [active, setActive] = useState('home');

   const isActive = (link) => {
      return active === link ? "active" : "";
   };

   return (
      <Navbar className="header pb-0 pt-0 border-grey border-bottom bg-dark" 
              variant="dark" 
              expand="lg"
      >
         <Navbar.Brand className="pb-0 mb-0 mt-0 pt-0">
            <Link to="/" className="d-flex flex-column align-items-center logo">
               <i className="fas fa-universal-access fa-3x"></i>
               SQueerL
            </Link>
         </Navbar.Brand>

         <Nav className="ml-auto pb-0 mb-0">
            <Link to="/" 
                  onClick={() => setActive('home')}
                  className={`nav-link mr-3 ${isActive("home")}`}
            >
               Home
            </Link>

            <Link to="/global"
                  className={`nav-link mr-3 ${isActive("global")}`}
                  onClick={() => setActive('global')}
            >
               Global Goals
            </Link>

            <Link to="/profile" 
                  className={`nav-link mr-3 ${isActive("profile")}`}
                  onClick={() => setActive('profile')}
            >
               My Profile
            </Link>

            <AmplifySignOut />
         </Nav>
      </Navbar>
   );
};

export default Header;