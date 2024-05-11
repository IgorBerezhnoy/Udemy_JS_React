import {useHttp} from '../../hooks/http.hook';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deleteHeroThunk, fetchFilters, fetchHeroes} from '../../actions';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import {createSelector} from 'reselect';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const select = createSelector(
    state => state.filters.activeFilter,
    state => state.heroes.heroes,
    (activeFilter, heroes) => {
      if (activeFilter === 'all') {
        return heroes;
      } else {
        return heroes.filter(el => el.element === activeFilter);
      }
    });
  const filteredHeroes = useSelector(select);
  const {heroesLoadingStatus} = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const {request} = useHttp();
  const deleteHero = async (id) => {
await dispatch(deleteHeroThunk(request, id));
  };
  useEffect(() => {
    dispatch(fetchFilters(request));
    dispatch(fetchHeroes(request));
  }, []);


  if (heroesLoadingStatus === 'loading') {
    return <Spinner/>;
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({id, ...props}) => {
      return <HeroesListItem deleteHero={deleteHero} key={id} id={id} {...props}/>;
    });
  };

  const elements = renderHeroesList(filteredHeroes);
  return (
    <ul>
      {elements}
    </ul>
  );
};

export default HeroesList;