const SET_SEARCH_WORD = 'SET_SEARCH_WORD';

 export type InitialStateType = {
    searchWordInput: string
    };

type ActionsType = SetSearchWordActionType;

let initialState: InitialStateType = {
    searchWordInput: ''
};

const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_SEARCH_WORD:            
            return {
                ...state,
                searchWordInput: action.searchWord
            }                        
        default:
            return state;
    }
}

export type SetSearchWordActionType = {
    type: typeof SET_SEARCH_WORD
    searchWord: string
}


export const setSearchWordInputAC = (searchWord: string): SetSearchWordActionType => {
    return {
        type: SET_SEARCH_WORD,
        searchWord: searchWord
    }
}

export type Dispatch = (action:ActionsType) => void;
export default searchReducer;