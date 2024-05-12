import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import {deleteHeroThunk, fetchHeroes, filteredHeroesSelector} from './heroesSlice';


// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
const filteredHeroes=useSelector(filteredHeroesSelector)
  const {heroesLoadingStatus} = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const deleteHero = async (id) => {
    await dispatch(deleteHeroThunk({id}));
  };
  useEffect(() => {
    dispatch(fetchHeroes());
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