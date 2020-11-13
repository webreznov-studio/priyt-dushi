import { poetryItemType } from './poetryPageReducer';
const SET_POETRY_ITEMS = 'SET_POETRY_ITEMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_FAVORITE_PAGE';


export type InitialStateType = {
    currentPage: number
    sizePage: number
    favoriteItemsArray: Array<poetryItemType>
};

type ActionsType = SetFavoriteItemsActionType | SetCurrentPageActionType;

let initialState: InitialStateType = {
    currentPage: 1,
    sizePage: 10,
    favoriteItemsArray: [
        {
            id: 0,
            name: "Идёт загрузка...",
            author: "",
            year: "",
            book: "",
            background: "",
            isFavorite: false,
            text: ["", ""]
        }
    ]
};

const favoritePageReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_POETRY_ITEMS:            
            return {
                ...state,
                favoriteItemsArray: action.arr
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }        
        default:
            return state;
    }
}

export type SetFavoriteItemsActionType = {
    type: typeof SET_POETRY_ITEMS
    arr: Array<poetryItemType>
}


export const setPoetryItemsAC = (arr: Array<poetryItemType>): SetFavoriteItemsActionType => {
    return {
        type: SET_POETRY_ITEMS,
        arr: arr
    }
}

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export type Dispatch = (action: ActionsType) => void;
export default favoritePageReducer;