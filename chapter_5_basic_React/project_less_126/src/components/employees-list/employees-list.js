import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, deleteUser, setIsLiked, setIncrease}) => {
  const elements = data.map((item) =>
    <EmployeesListItem key={item.id} {...item} deleteUser={deleteUser} setIsLiked={setIsLiked}
                       setIncrease={setIncrease}/>);

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;