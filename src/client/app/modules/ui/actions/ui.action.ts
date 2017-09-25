import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import { IUiState } from '../states/index';

/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
export namespace Ui {
    // Category to uniquely identify the actions
    export const CATEGORY: string = 'UI';


    /**
     * For each action type in an action group, make a simple
     * enum object for all of this group's action types.
     *
     * The 'type' utility function coerces strings into string
     * literal types and runs a simple check to guarantee all
     * action types in the application are unique.
     */
    export interface IUiActions {
        SELECT_TAX_SLAB: string;
    }

    export const ActionTypes: IUiActions = {
        SELECT_TAX_SLAB: type(`${CATEGORY} Select Tax Slab`)
    };

    /**
     * Every action is comprised of at least a type and an optional
     * payload. Expressing actions as classes enables powerful
     * type checking in reducer functions.
     *
     * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
     */
    export class SelectTaxSlab implements Action {
        type = ActionTypes.SELECT_TAX_SLAB;
        constructor(public payload: number) { }
    }

    /**
     * Export a type alias of all actions in this action group
     * so that reducers can easily compose action types
     */
    export type Actions
        = SelectTaxSlab;
}
