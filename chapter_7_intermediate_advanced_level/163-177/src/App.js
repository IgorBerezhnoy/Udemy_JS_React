import React, {Component, PureComponent, useMemo, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.mail !== nextProps.mail || this.props.text !== nextProps.text)
  }

  render(props) {
    console.log('Rendering form');
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <input value={this.props.mail} type="email" className="form-control" id="exampleFormControlInput1"
                   placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1"
                      rows="3"></textarea>
          </div>
        </form>
      </Container>);
  }
}

// const Form = React.memo((props) => {
//   console.log('Rendering form');
//   return (
//     <Container>
//       <form className="w-50 border mt-5 p-3 m-auto">
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//           <input value={props.mail.name} type="email" className="form-control" id="exampleFormControlInput1"
//                  placeholder="name@example.com"/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//       </form>
//     </Container>
//   );
// });

function App() {
  const [data, setData] = useState({
    // mail: {name: 'name@example.com'},
    mail: 'name@example.com',
    text: 'some text',
    count: 0
  });

  // const obj = useMemo(() => {
  //   return {
  //     mail: data.mail.name,
  //     text: data.text,
  //     count: data.count
  //
  //   };
  // }, [data]);
  return (
    <>
      <Form mail={data.mail} text={data.text} count={data.count}/>
      <button
        onClick={() => setData((data) => ({
          // mail: {name: 'name@example.com'},
          mail: 'name@example.com',
          text: 'another text',
          count: data.count++
        }))}>
        Click me
      </button>
    </>
  );
}

export default App;
