import './app-filter.css';

const AppFilter = ({setFilter, filter}) => {

  return (
    <div className="btn-group">
      <button type="button"
              onClick={() => setFilter('all')}
              className={`btn ${filter === 'all' ? 'btn-light' : 'btn-outline-light'}`}>
        Все сотрудники
      </button>
      <button type="button"
              onClick={() => setFilter('increase')}
              className={`btn ${filter === 'increase' ? 'btn-light' : 'btn-outline-light'}`}>
        На повышение
      </button>
      <button type="button"
              onClick={() => setFilter('more1000')}
              className={`btn ${filter === 'more1000' ? 'btn-light' : 'btn-outline-light'}`}>
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;