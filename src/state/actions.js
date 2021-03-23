export const Actions = {
  changeBgColor: 'CHANGE_BG_COLOR',
};

export const ActionChangeBgColor = (dispatch, color) =>
  dispatch({ type: Actions.changeBgColor, payload: color });
