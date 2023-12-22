import './employees-add-form.css';
import {Component} from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    };
  }

  setName = (name) => this.setState({name});
  setSalary = (salary) => this.setState({salary});

  render() {
    const {addUser} = this.props;
    const {name, salary} = this.state;
    let onClickHandler = (e) => {
      e.preventDefault();
      if (name.trim() && salary) {
        addUser({name, salary});
        this.setName('');
        this.setSalary('');
      }
    };
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex">
          <input type="text"
                 className="form-control new-post-label"
                 value={name}
                 onChange={(e) => this.setName(e.currentTarget.value)}
                 placeholder="Как его зовут?"/>
          <input type="number" value={salary} onChange={(e) => this.setSalary(e.currentTarget.value)}
                 className="form-control new-post-label"
                 placeholder="З/П в $?"/>

          <button type="submit" onClick={(e) => onClickHandler(e)}
                  className="btn btn-outline-light">Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;