import {Container} from 'react-bootstrap';
import './App.css';
import {Component, useEffect, useState} from 'react';

// class Slider extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0
//     };
//   }
//
//   changeSlide = (i) => {
//     this.setState(({slide}) => ({
//       slide: slide + i
//     }));
//   };
//
//   toggleAutoplay = () => {
//     this.setState(({autoplay}) => ({
//       autoplay: !autoplay
//     }));
//   };
//
//   componentDidMount() {
//     document.title = 'slider';
//   }
//
//   componentDidUpdate() {
//     document.title = 'newSlider' + Math.random();
//   }
//
//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img className="d-block w-100"
//                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//                alt="slide"/>
//           <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}>-1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}>+1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}>toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }


const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  useEffect(() => {
    document.title = 'slider' + slide;
    }, [slide]);
  useEffect(() => {
    return ()=> {
      console.log('Died');
    };
  }, []);
  return (<Container>
    <div className="slider w-50 m-auto">
      <img className="d-block w-100"
           src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
           alt="slide"/>
      <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}
      </div>
      <div className="buttons mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setSlide(slide => slide - 1)}>-1
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setSlide(slide => slide + 1)}>+1
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setAutoplay(!autoplay)}>toggle autoplay
        </button>
      </div>
    </div>
  </Container>);
};


function App() {
  const [isSlide, setIsSlide] = useState(true);
  return (<>
    <button onClick={() => setIsSlide(!isSlide)}>Click</button>
    {isSlide && (<Slider/>)}
  </>);
}


export default App;

