import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase, isLiked, id, deleteUser, setIsLiked, setIncrease}) => {

  return (<li
    className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''} ${isLiked ? 'like' : ''}`}>
    <span className={`list-group-item-label`} tab onClick={() => setIsLiked(id, !isLiked)}>{name}</span>
    <input type="text" className={`list-group-item-input`} defaultValue={`${salary}$`}/>
    <div className={`d-flex justify-content-center align-items-center`}>
      <button type="button" onClick={() => setIncrease(id, !increase)}
              className="btn-cookie btn-sm ">
        <i className="fas fa-cookie"></i>
      </button>

      <button type="button"
              className="btn-trash btn-sm " onClick={() => deleteUser(id)}>
        <i className="fas fa-trash"></i>
      </button>
      <i className="fas fa-star"></i>
    </div>
  </li>);

};

export default EmployeesListItem;