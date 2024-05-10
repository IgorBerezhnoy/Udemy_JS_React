import React from 'react';

export const Counter = ({count, dec, inc, rand}) => {

  return (
    <div>
      <div>{count}</div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rand}>RAND</button>

    </div>
  );
};


