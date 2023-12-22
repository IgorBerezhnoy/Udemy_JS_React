import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, id: 1, isLiked: false},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2, isLiked: false},
        {name: 'Carl M.', salary: 5000, increase: false, id: 3, isLiked: true}]
    };
  }


  deleteUser = (id) => {
    this.setState({data: this.state.data.filter(el => el.id !== id)});
  };

  addUser = ({name, salary}) => {
    this.setState({data: [...this.state.data, {name, salary, increase: false, id: this.state.data.length + 1}]});
  };
  setIncrease = (id, status) => {
    this.setState({data: this.state.data.map(el => el.id === id ? {...el, increase: status} : el)});
  };
  setIsLiked = (id, status) => {
    this.setState({data: this.state.data.map(el => el.id === id ? {...el, isLiked: status} : el)});

  };

  render() {
    const {data} = this.state;
    const employeesIncrease=data.filter(el=>el.increase).length
    return (

      <div className="app">
        <AppInfo employeesLeng={data.length} employeesIncrease={employeesIncrease}/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList data={this.state.data} deleteUser={this.deleteUser} setIsLiked={this.setIsLiked}
                       setIncrease={this.setIncrease}/>
        <EmployeesAddForm addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
