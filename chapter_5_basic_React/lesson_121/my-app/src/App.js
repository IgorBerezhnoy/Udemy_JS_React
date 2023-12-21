import './App.css';
import React, {Component} from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      value: ''
    };
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }));
  };
  changeState = (value) => {
    this.setState({
      value
    });
  };

  render() {

    const {name, surname} = this.props;
    const {years, value} = this.state;
    return <div>
      <button onClick={this.nextYear}>{this.state.text}</button>
      <h1>My name is {`${name} ${surname} years ${years}`} Я {value || '...'} </h1>
      <span>Ведите должность:</span>
      <input onChange={(e) => this.changeState(e.currentTarget.value)} value={value}/>
    </div>;
  }
}


function App() {

  return (
    <div className="App">
      <WhoAmI name={'Igor'} surname={'Petrov'}/>
    </div>
  );
}

export default App;
