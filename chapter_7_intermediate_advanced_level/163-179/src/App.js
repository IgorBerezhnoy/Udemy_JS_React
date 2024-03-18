import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const getDataFromFirstFetch = () => {
  return 10;
};
const getDataFromSecondFetch = () => {
  return 20;
};

function WithSlider(BaseComponent, getData) {
  return function (props) {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
      setSlide(getData());
    }, []);

    function changeSlide(i) {
      setSlide(slide => slide + i);
    }

    return <BaseComponent
      {...props}
      slide={slide}
      changeSlide={changeSlide}
      setAutoplay={setAutoplay}
      autoplay={autoplay}/>;
  };
};

const SliderFirst = ({slide, changeSlide}) => {

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100"
             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
             alt="slide"/>
        <div className="text-center mt-5">Active slide {slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderSecond = ({slide, changeSlide, autoplay, setAutoplay}) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100"
             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
             alt="slide"/>
        <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setAutoplay(autoplay => !autoplay)}>toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};
const WithSliderFirst = WithSlider(SliderFirst, getDataFromFirstFetch);
const WithSliderSecond = WithSlider(SliderSecond, getDataFromSecondFetch);


const WithLogger = (WrapperComponent) => (props) => {
  console.log('Hello');
  return <WrapperComponent {...props} />;
};
const Hello = () => {
  return <h1>Hello</h1>;
};
const WithLoggerHello = WithLogger(Hello);
function App() {
  return (
    <>
      <WithLoggerHello/>
      <WithSliderFirst/>
      <WithSliderSecond/>
    </>
  );
}

export default App;


// import {useReducer, useState} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';
//
// function reducer(state, action) {
//   switch (action.type) {
//     case 'toggle': {
//       return {
//         ...state,
//         autoplay: !state.autoplay,
//       };
//     }
//     case 'slow': {
//       return {
//         ...state,
//         autoplay: 300,
//       };
//     }
//     case 'fast': {
//       return {
//         ...state,
//         autoplay: 700,
//       };
//
//     }
//     case '500': {
//       return {
//         ...state, autoplay: action.speed
//       };
//     }
//     default:
//       throw new Error('unknown action');
//   }
// }
//
// const Slider = () => {
//   const [slide, setSlide] = useState(0);
//   // const [autoplay, setAutoplay] = useState(false);
//   const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});
//   console.log(autoplay);
//
//   function changeSlide(i) {
//     setSlide(slide => slide + i);
//   }
//
//   return (
//     <Container>
//       <div className="slider w-50 m-auto">
//         <img className="d-block w-100"
//              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//              alt="slide"/>
//         <div className="text-center mt-5">Active slide {slide} <br/>{autoplay.autoplay ? 'auto' : null} </div>
//         <div className="buttons mt-3">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => changeSlide(-1)}>-1
//           </button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => changeSlide(1)}>+1
//           </button>
//
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({type: 'toggle'})}>toggle autoplay
//           </button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({type: 'slow'})}>slow autoplay
//           </button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({type: 'fast'})}>fast autoplay
//           </button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({type: '500', speed: 500})}>500 autoplay
//           </button>
//
//         </div>
//       </div>
//     </Container>
//   );
// };
//
// function App() {
//   return (
//     <Slider/>
//   );
// }
//
// export default App;


// import React, {useMemo, useState} from 'react';
// import './App.css';
// import {Form} from './Form';
// import {dataContext} from './DataContext';
//
//
// function App() {
//   const {Provider, Consumer} = dataContext;
//   const [data, setData] = useState({
//     mail: 'first@example.com',
//     text: 'some text',
//     count: 0,
//     forceChangeMail
//   });
//
//   function forceChangeMail() {
//     setData((data) => ({...data, mail: 'name@examp1111le.com'}));
//   }
//
//   return (
//     <Provider value={data}>
//       <Form text={data.text} count={data.count}
//       />
//       <button
//         onClick={() => setData({
//           mail: 'name@example.com',
//           text: 'another text',
//           count: data.count++
//         })}>
//         Click me
//       </button>
//     </Provider>
//   );
// }
//
// export default App;
