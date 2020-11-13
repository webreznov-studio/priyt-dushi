const SET_FILTER_TYPE = 'SET_FILTER_TYPE';

export const SORT_NAME = 'SORT_NAME';
export const SORT_AUTHOR = 'SORT_AUTHOR';
export const SORT_YEAR = 'SORT_YEAR';
export const SORT_BOOK = 'SORT_BOOK';
export const SORT_NUMBER = 'SORT_NUMBER';
export const SORT_STRING = 'SORT_STRING';
export const NULL_STR = '';

export type ConditionSortType =
    typeof SORT_NAME |
    typeof SORT_AUTHOR |
    typeof SORT_YEAR |
    typeof SORT_BOOK |    
    typeof SORT_NUMBER |
    typeof SORT_STRING |
    typeof NULL_STR;

export type InitialStateType = {
    filterType: ConditionSortType
};

type ActionsType = SetFilterTypeActionType;

let initialState: InitialStateType = {
    filterType: NULL_STR
};

const filterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_FILTER_TYPE:            
            return {
                ...state,
                filterType: action.filterType
            }
        default:
            return state;
    }
}

export type SetFilterTypeActionType = {
    type: typeof SET_FILTER_TYPE
    filterType: ConditionSortType
}


export const setFilterTypeInputAC = (filterType: ConditionSortType): SetFilterTypeActionType => {
    return {
        type: SET_FILTER_TYPE,
        filterType: filterType
    }
}

export type Dispatch = (action: ActionsType) => void;
export default filterReducer;