import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import { ITaxSlabState } from '../states/index';

/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
export namespace TaxSlab {
    // Category to uniquely identify the actions
    export const CATEGORY: string = 'Tax Slab';


    /**
     * For each action type in an action group, make a simple
     * enum object for all of this group's action types.
     *
     * The 'type' utility function coerces strings into string
     * literal types and runs a simple check to guarantee all
     * action types in the application are unique.
     */
    export interface ITaxSlabActions {
        LOAD_TAX_SLAB: string;
        LOAD_TAX_SLAB_SUCCESSFUL: string;
        LOAD_TAX_SLAB_FAILED: string;

        LOAD_TAX_SLAB_DETAIL: string;
        LOAD_TAX_SLAB_DETAIL_SUCCESSFUL: string;
        LOAD_TAX_SLAB_DETAIL_FAILED: string;
    }

    export const ActionTypes: ITaxSlabActions = {
        LOAD_TAX_SLAB: type(`${CATEGORY} Load`),
        LOAD_TAX_SLAB_SUCCESSFUL: type(`${CATEGORY} Load Successful`),
        LOAD_TAX_SLAB_FAILED: type(`${CATEGORY} Load Failed`),

        LOAD_TAX_SLAB_DETAIL: type(`${CATEGORY} Detail Load`),
        LOAD_TAX_SLAB_DETAIL_SUCCESSFUL: type(`${CATEGORY} Detail Load Successful`),
        LOAD_TAX_SLAB_DETAIL_FAILED: type(`${CATEGORY} Detail Load Failed`)
    };

    /**
     * Every action is comprised of at least a type and an optional
     * payload. Expressing actions as classes enables powerful
     * type checking in reducer functions.
     *
     * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
     */
    export class LoadTaxSlabAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB;
        payload: string = null;
    }

    export class LoadTaxSlabSuccessfulAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB_SUCCESSFUL;
        constructor(public payload: ITaxSlabState) { }
    }

    export class LoadTaxSlabFailedAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB_FAILED;
        payload: string = null;
    }





    export class LoadTaxSlabDetailAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB_DETAIL;
        constructor(public payload: number) { }
    }

    export class LoadTaxSlabDetailSuccessfulAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB_DETAIL_SUCCESSFUL;
        constructor(public payload: any) { }
    }

    export class LoadTaxSlabDetailFailedAction implements Action {
        type = ActionTypes.LOAD_TAX_SLAB_DETAIL_FAILED;
        payload: string = null;
    }

    /**
     * Export a type alias of all actions in this action group
     * so that reducers can easily compose action types
     */
    export type Actions
        = LoadTaxSlabAction
        | LoadTaxSlabSuccessfulAction
        | LoadTaxSlabFailedAction
        
        | LoadTaxSlabDetailAction
        | LoadTaxSlabDetailSuccessfulAction
        | LoadTaxSlabDetailFailedAction;
}
