import { OptionsContainer, VisibleOptionsAction } from '../types';

const initialState = {
  displayed: false,
  optionsToShow: 'NONE',
};

const optionsContainer = (state:OptionsContainer = initialState, action: VisibleOptionsAction) => {
  switch (action.type) {
    case 'SET_VISIBLE_OPTIONS':
      return {
        displayed: action.displayed,
        optionsToShow: action.optionsToShow
      };
    default:
      return state;
  }
};

export default optionsContainer;
