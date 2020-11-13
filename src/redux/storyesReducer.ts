import { poetryItemType } from './poetryPageReducer';
const SET_STORYES_ITEMS = 'SET_STORYES_ITEMS';

type initialStateType = {
    storyesItemsArray: Array<poetryItemType>
}

type SetStoryesItemsActionType = {
    type: typeof SET_STORYES_ITEMS,
    arr: Array<poetryItemType>
}

type ActionType = SetStoryesItemsActionType

let initialState: initialStateType = {
    storyesItemsArray: []
}

const storyesPageReducer = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case SET_STORYES_ITEMS:
            return {
                ...state,
                storyesItemsArray: action.arr
            }
        default:
        return state
    }
}


export const setStoryesItemsAC = (arr: Array<poetryItemType>): SetStoryesItemsActionType => {
    return {
        type: SET_STORYES_ITEMS,
        arr: arr
    }
}

export type Dispatch = (action:ActionType) => void;
export default storyesPageReducer;