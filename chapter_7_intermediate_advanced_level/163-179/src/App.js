import React, {useMemo, useState} from 'react';
import './App.css';
import {Form} from './Form';
import {dataContext} from './DataContext';


function App() {
  const {Provider, Consumer} = dataContext;
  const [data, setData] = useState({
    mail: 'first@example.com',
    text: 'some text',
    count: 0,
    forceChangeMail
  });

  function forceChangeMail() {
    setData((data) => ({...data, mail: 'name@examp1111le.com'}));
  }

  return (
    <Provider value={data}>
      <Form text={data.text} count={data.count}/>
      <button
        onClick={() => setData({
          mail: 'name@example.com',
          text: 'another text',
          count: data.count++
        })}>
        Click me
      </button>
    </Provider>
  );
}

export default App;
