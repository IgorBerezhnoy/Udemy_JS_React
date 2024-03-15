// // import {Container} from 'react-bootstrap';
// // import './App.css';
// // import {Component, useCallback, useEffect, useMemo, useState} from 'react';
// //
// // // class Slider extends Component {
// // //
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       autoplay: false,
// // //       slide: 0
// // //     };
// // //   }
// // //
// // //   changeSlide = (i) => {
// // //     this.setState(({slide}) => ({
// // //       slide: slide + i
// // //     }));
// // //   };
// // //
// // //   toggleAutoplay = () => {
// // //     this.setState(({autoplay}) => ({
// // //       autoplay: !autoplay
// // //     }));
// // //   };
// // //
// // //   componentDidMount() {
// // //     document.title = 'slider';
// // //   }
// // //
// // //   componentDidUpdate() {
// // //     document.title = 'newSlider' + Math.random();
// // //   }
// // //
// // //   render() {
// // //     return (
// // //       <Container>
// // //         <div className="slider w-50 m-auto">
// // //           <img className="d-block w-100"
// // //                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
// // //                alt="slide"/>
// // //           <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}
// // //           </div>
// // //           <div className="buttons mt-3">
// // //             <button
// // //               className="btn btn-primary me-2"
// // //               onClick={() => this.changeSlide(-1)}>-1
// // //             </button>
// // //             <button
// // //               className="btn btn-primary me-2"
// // //               onClick={() => this.changeSlide(1)}>+1
// // //             </button>
// // //             <button
// // //               className="btn btn-primary me-2"
// // //               onClick={this.toggleAutoplay}>toggle autoplay
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </Container>
// // //     );
// // //   }
// // // }
// //
// //
// // const Slider = (props) => {
// //   const [slide, setSlide] = useState(0);
// //   const [autoplay, setAutoplay] = useState(false);
// //   useEffect(() => {
// //     document.title = 'slider' + slide;
// //   }, [slide]);
// //   let getSomeImages = useMemo(() => {
// //     console.log('Get some images');
// //     return [<img className="d-block w-100"
// //                  src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
// //                  alt="slide"/>,
// //       <img className="d-block w-100"
// //            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
// //            alt="slide"/>];
// //   }, []);
// //   useEffect(() => {
// //     return () => {
// //       console.log('Died');
// //     };
// //   }, []);
// //   return (<Container>
// //     <div className="slider w-50 m-auto">
// //       {getSomeImages.map((el, i) => <div key={i}>{el}</div>)}
// //       <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}
// //       </div>
// //       <div className="buttons mt-3">
// //         <button
// //           className="btn btn-primary me-2"
// //           onClick={() => setSlide(slide => slide - 1)}>-1
// //         </button>
// //         <button
// //           className="btn btn-primary me-2"
// //           onClick={() => setSlide(slide => slide + 1)}>+1
// //         </button>
// //         <button
// //           className="btn btn-primary me-2"
// //           onClick={() => setAutoplay(!autoplay)}>toggle autoplay
// //         </button>
// //       </div>
// //     </div>
// //   </Container>);
// // };
// //
// //
// // function App() {
// //   const [isSlide, setIsSlide] = useState(true);
// //   return (<>
// //     <button onClick={() => setIsSlide(!isSlide)}>Click</button>
// //     {isSlide && (<Slider/>)}
// //   </>);
// // }
// //
// //
// // export default App;
// //
// import {useState} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';
//
// function useInputWithValidation(initValue) {
//   const [value, setValue] = useState(initValue);
//   const onChange = (e) => {
//     setValue(e.currentTarget.value);
//   };
//   const validateInput = () => (value.search(/\d/) >= 0);
//
//   return {value, onChange, validateInput};
// }
//
// const Form = () => {
//
//   const input = useInputWithValidation('');
//   const textArea = useInputWithValidation('');
//   const color = input.validateInput() ? 'text-danger' : '';
//   return (<Container>
//     <form className="w-50 border mt-5 p-3 m-auto">
//       <div className="mb-3">
//         <input value={`${input.value} / ${textArea.value}`} type={'text'} className={'form-control'} readOnly/>
//         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//         <input
//           value={input.value} onChange={input.onChange}
//           type="email" className={`form-control ${color}`}
//           id="exampleFormControlInput1" placeholder="name@example.com"/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//         <textarea value={textArea.value} onChange={textArea.onChange}
//                   className="form-control" id="exampleFormControlTextarea1"
//                   rows="3"></textarea>
//       </div>
//     </form>
//   </Container>);
// };
//
// function App() {
//   return (<Form/>);
// }
//
// export default App;


const useCounterWithRndAndReset = (initValue) => {
  const [counter, setCounter] = React.useState(initValue);

  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return {counter, setCounter, rndCounter, resetCounter};
};

const Counter = (props) => {
  const {setCounter, rndCounter, resetCounter, counter} = useCounterWithRndAndReset(props.counter);

  const incCounter = () => {
    if (counter < 50) {
      setCounter(counter => counter + 1);
    }
  };

  const decCounter = () => {
    if (counter > -50) {
      setCounter(counter => counter - 1);
    }
  };
  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
};

const RndCounter = (props) => {
  const {rndCounter, resetCounter, counter} = useCounterWithRndAndReset(props.counter);


  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter counter={0}/>
      <RndCounter counter={5}/>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

