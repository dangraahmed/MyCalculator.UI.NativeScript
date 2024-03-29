import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import { ITaxSlabState, ITaxSlab } from '../states/index';

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

        SELECT_TAX_SLAB: string;

        LOAD_TAX_SLAB_DETAIL: string;
        LOAD_TAX_SLAB_DETAIL_SUCCESSFUL: string;
        LOAD_TAX_SLAB_DETAIL_FAILED: string;

        ADD_UPDATE_TAX_SLAB: string;
        ADD_UPDATE_TAX_SLAB_SUCCESSFUL: string;
        ADD_UPDATE_TAX_SLAB_FAILED: string;

        DELETE_TAX_SLAB: string;
        DELETE_TAX_SLAB_SUCCESSFUL: string;
        DELETE_TAX_SLAB_FAILED: string;
    }

    export const ActionTypes: ITaxSlabActions = {
        LOAD_TAX_SLAB: type(`${CATEGORY} Load`),
        LOAD_TAX_SLAB_SUCCESSFUL: type(`${CATEGORY} Load Successful`),
        LOAD_TAX_SLAB_FAILED: type(`${CATEGORY} Load Failed`),

        SELECT_TAX_SLAB: type(`${CATEGORY} Select`),

        LOAD_TAX_SLAB_DETAIL: type(`${CATEGORY} Detail Load`),
        LOAD_TAX_SLAB_DETAIL_SUCCESSFUL: type(`${CATEGORY} Detail Load Successful`),
        LOAD_TAX_SLAB_DETAIL_FAILED: type(`${CATEGORY} Detail Load Failed`),

        ADD_UPDATE_TAX_SLAB: type(`${CATEGORY} Add Or Update`),
        ADD_UPDATE_TAX_SLAB_SUCCESSFUL: type(`${CATEGORY} Add Or Update Successful`),
        ADD_UPDATE_TAX_SLAB_FAILED: type(`${CATEGORY} Add Or Update Failed`),

        DELETE_TAX_SLAB: type(`${CATEGORY} Delete`),
        DELETE_TAX_SLAB_SUCCESSFUL: type(`${CATEGORY} Delete Successful`),
        DELETE_TAX_SLAB_FAILED: type(`${CATEGORY} Delete Failed`)
    };

    /**
     * Every action is comprised of at least a type and an optional
     * payload. Expressing actions as classes enables powerful
     * type checking in reducer functions.
     *
     * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
     */

    //#region LOAD_TAX_SLAB 
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
    //#endregion


    export class SelectTaxSlab implements Action {
        type = ActionTypes.SELECT_TAX_SLAB;
        constructor(public payload: number) { }
    }


    //#region LOAD_TAX_SLAB_DETAIL
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
    //#endregion

    //#region ADD_TAX_SLAB 
    export class AddUpdateTaxSlabAction implements Action {
        type = ActionTypes.ADD_UPDATE_TAX_SLAB;
        constructor(public payload: ITaxSlab) { }
    }

    export class AddUpdateTaxSlabSuccessfulAction implements Action {
        type = ActionTypes.ADD_UPDATE_TAX_SLAB_SUCCESSFUL;
        constructor(public payload: ITaxSlab) { }
    }

    export class AddUpdateTaxSlabFailedAction implements Action {
        type = ActionTypes.ADD_UPDATE_TAX_SLAB_FAILED;
        payload: string = null;
    }
    //#endregion

    //#region DELETE_TAX_SLAB
    export class DeleteTaxSlabAction implements Action {
        type = ActionTypes.DELETE_TAX_SLAB;
        constructor(public payload: number) { }
    }

    export class DeleteTaxSlabSuccessfulAction implements Action {
        type = ActionTypes.DELETE_TAX_SLAB_SUCCESSFUL;
        constructor(public payload: any) { }
    }

    export class DeleteTaxSlabFailedAction implements Action {
        type = ActionTypes.DELETE_TAX_SLAB_FAILED;
        payload: string = null;
    }
    //#endregion


    /**
     * Export a type alias of all actions in this action group
     * so that reducers can easily compose action types
     */
    export type Actions
        = LoadTaxSlabAction
        | LoadTaxSlabSuccessfulAction
        | LoadTaxSlabFailedAction
        | SelectTaxSlab
        | LoadTaxSlabDetailAction
        | LoadTaxSlabDetailSuccessfulAction
        | LoadTaxSlabDetailFailedAction
        | AddUpdateTaxSlabAction
        | AddUpdateTaxSlabSuccessfulAction
        | AddUpdateTaxSlabFailedAction
        | DeleteTaxSlabAction
        | DeleteTaxSlabSuccessfulAction
        | DeleteTaxSlabFailedAction;
}
