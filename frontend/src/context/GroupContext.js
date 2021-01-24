import React, { createContext } from 'react';
export default createContext({
   selectedGroup: {
      name: '',
      code: ''
   },
   updateSelected: () => {}
});