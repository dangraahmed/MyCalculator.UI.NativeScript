import { ITaxSlabState, ITaxSlab, ITaxSlabDetail } from '../states/index';
import { TaxSlab } from '../actions/index';

export function taxSlabReducer(
  state: ITaxSlabState,
  action: TaxSlab.Actions
): any {
  let index: number;

  switch (action.type) {
    case TaxSlab.ActionTypes.LOAD_TAX_SLAB_SUCCESSFUL:
      return (<any>Object).assign({}, state, action.payload);

    case TaxSlab.ActionTypes.SELECT_TAX_SLAB:
      return (<any>Object).assign({}, state, { selectedTaxSlabId: action.payload });

    case TaxSlab.ActionTypes.LOAD_TAX_SLAB_DETAIL_SUCCESSFUL:
      index = state.taxSlabs.map(ts => ts.id).indexOf(state.selectedTaxSlabId);
      return (<any>Object).assign({}, state, {
        taxSlabs:
        [
          ...state.taxSlabs.slice(0, index),
          Object.assign({}, state.taxSlabs[index], { taxSlabDetail: action.payload.taxSlabDetail }),
          ...state.taxSlabs.slice(index + 1)
        ]
      });

    case TaxSlab.ActionTypes.ADD_UPDATE_TAX_SLAB_SUCCESSFUL:
      // TODO : refactoring required remove duplicate code
      if (state.selectedTaxSlabId !== -1) {
        index = state.taxSlabs.map(ts => ts.id).indexOf(state.selectedTaxSlabId);
        return (<any>Object).assign({}, state, {
          taxSlabs:
          [
            ...state.taxSlabs.slice(0, index),
            Object.assign({}, state.taxSlabs[index], action.payload),
            ...state.taxSlabs.slice(index + 1)
          ]
        });
      } else {
        return (<any>Object).assign({}, state, {
          taxSlabs:
          [
            ...state.taxSlabs,
            action.payload
          ]
        });
      }

    case TaxSlab.ActionTypes.DELETE_TAX_SLAB_SUCCESSFUL:
      index = state.taxSlabs.map(ts => ts.id).indexOf(state.selectedTaxSlabId);
      return (<any>Object).assign({}, state, {
        taxSlabs:
        [
          ...state.taxSlabs.slice(0, index),
          ...state.taxSlabs.slice(index + 1)
        ]
      });


    default:
      return state;
  }
}
