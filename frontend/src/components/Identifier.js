import React, { useState } from 'react';
import Faker from 'faker';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Identifier = () => {
   const icons = ["cat", "crow", "dog", "dove", "dragon", "feather", "fish", "frog", "hippo", 
                  "horse", "horse-head", "kiwi-bird", "otter", "paw", "spider"];
   const [avatar, setAvatar] = useState(icons[Math.floor(Math.random() * icons.length)]);
   const [username, setUsername] = useState(Faker.internet.userName());

   const getRandomIcon = () => {
      setAvatar(icons[Math.floor(Math.random() * icons.length)]);
   };

   return (
      <div className="d-flex w-100 flex-column align-items-center border title-border p-3">
         <div className="d-flex align-items-center mb-4">
            <h2 className="mr-3">Icon: </h2>
            <OverlayTrigger placement={"right"}
                           overlay={
                              <Tooltip>
                                 <strong>Click on me to change your avatar</strong>.
                              </Tooltip>
                           }
            >
               <i className={`fas fa-${avatar} fa-3x border title-border p-3 username`} 
                  onClick={getRandomIcon}
               >
               </i>
            </OverlayTrigger>
         </div>

         <div className="d-flex align-items-center">
            <h2 className="mr-3">Username: </h2>
            <OverlayTrigger placement={"right"}
                           overlay={
                              <Tooltip>
                                 <strong>Click on me to change your username</strong>.
                              </Tooltip>
                           }
            >
               <div className="border title-border p-3 username" 
                  onClick={() => setUsername(Faker.internet.userName())}
               >
                  { username }
               </div>
            </OverlayTrigger>
         </div>
      </div>
   );
};

export default Identifier;