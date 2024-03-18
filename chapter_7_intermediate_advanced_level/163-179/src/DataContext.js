import React from 'react';

export const dataContext = React.createContext({
  mail: 'first@example.com',
  text: 'some text',
  count: 0
});