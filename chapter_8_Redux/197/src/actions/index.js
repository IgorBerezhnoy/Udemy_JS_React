export const heroesFetching = () => {
  return {
    type: 'HEROES_FETCHING'
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: 'HEROES_FETCHED',
    payload: heroes
  };
};

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR'
  };
};
export const deleteHeroById = (id) => {
  return {
    type: 'DELETE_HERO_BY_ID',
    payload: id
  };
};
export const addHero = (hero) => {
  return {
    type: 'ADD_HERO',
    payload: hero
  };
};
export const setFilters = (filter = 'all') => {
  return {
    type: 'SET_FILTERS',
    payload: filter
  };
};
export const setActiveFilter = (filter = 'all') => {
  return {
    type: 'SET_ACTIVE_FILTER',
    payload: filter
  };
};