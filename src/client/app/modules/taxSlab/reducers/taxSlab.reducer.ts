import { ITaxSlabState } from '../states/index';
import { TaxSlab } from '../actions/index';

export function taxSlabReducer(
  state: ITaxSlabState,
  action: TaxSlab.Actions
): ITaxSlabState {
  let index: number;

  switch (action.type) {
    case TaxSlab.ActionTypes.LOAD_TAX_SLAB_SUCCESSFUL:
      return (<any>Object).assign({}, state, action.payload);

    default:
      return state;
  }
}
