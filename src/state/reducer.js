import { Actions } from './actions';

export const InitialState = {
  bgColor: '#845ec2',
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.changeBgColor:
      return { ...state, bgColor: action.payload };
    default:
      return state;
  }
};

export default reducer;
