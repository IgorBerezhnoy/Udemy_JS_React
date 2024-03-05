import './search-panel.css';
import {Component} from 'react';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {term, setTerm} = this.props;
    return (
      <input autoFocus value={term} onChange={(e) => setTerm(e.currentTarget.value)} type="text"
             className="form-control search-input"
             placeholder="Найти сотрудника"/>
    );

  }

}

export default SearchPanel;