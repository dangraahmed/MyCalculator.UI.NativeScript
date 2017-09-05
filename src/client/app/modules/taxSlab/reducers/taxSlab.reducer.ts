import { ITaxSlab } from '../states/index';
import { TaxSlab } from '../actions/index';

export function TaxSlabReducer(
  state: Array<ITaxSlab> = [],
  action: TaxSlab.Actions
): Array<ITaxSlab> {
  let index: number;

  switch (action.type) {
    case TaxSlab.ActionTypes.LOAD_TAX_SLAB_SUCCESSFUL:
    debugger;
      return null;

    default:
      return state;
  }
}
