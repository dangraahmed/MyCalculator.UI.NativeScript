export interface ITaxSlab {
    id: number;
    fromYear: number;
    toYear: number;
    category: string;
}

export interface ITaxSlabState {
    taxSlabs: Array<ITaxSlab>;
}
