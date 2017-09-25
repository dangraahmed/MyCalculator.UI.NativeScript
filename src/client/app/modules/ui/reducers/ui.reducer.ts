import { IUiState, UiInitialState } from '../states/index';
import { Ui } from '../actions/index';

export function UiReducer(
  state: IUiState = UiInitialState,
  action: Ui.Actions
): IUiState {
  switch (action.type) {
    case Ui.ActionTypes.SELECT_TAX_SLAB:
      return (<any>Object).assign({}, state, { selectedTaxSlab: action.payload });

    default:
      return state;
  }
}
