import React from 'react';

import {dataContext} from './DataContext';

export const InputComponent = () => {
  const context = React.useContext(dataContext);
  return <input value={context.mail} type="email" onClick={context.forceChangeMail} className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"/>;
  //   }}
  // </Consumer>;
};