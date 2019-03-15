import {SetSearchQueryAction} from '../types';

const initialState = ''

const searchQuery = (
  state:string = initialState,
  action: SetSearchQueryAction
) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERRY':
      return action.searchQuery;
    default:
      return state;
  }
};

export default searchQuery;
