export interface ITaxSlab {
    id: number;
    fromYear: number;
    toYear: number;
    category: string;
    taxSlabDetail: Array<ITaxSlabDetail>;
}

export interface ITaxSlabDetail {
    id: number;
    taxSlabId: number;
    slabFromAmount?: number;
    slabToAmount?: number;
    percentage: number;
    slab: string;
}

export interface ITaxSlabState {
    taxSlabs: Array<ITaxSlab>;
    selectedTaxSlabId: number;
}
