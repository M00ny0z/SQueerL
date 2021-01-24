import React from 'react';

const Achievement = (props) => {
   return (
      <div className="border d-flex flex-column align-items-center rounded justify-content-between p-2 mr-3"
           style={{ height: '8rem', width: '10rem'}}
      >
         <i class="fas fa-medal fa-3x"></i>
         <strong>{ props.name }</strong>
      </div>
   )
};

export default Achievement;