import BACKGROUND_DEFAULT from '../assets/img/backgroundDefault.gif';

const SET_BACKGROUND = 'SET BACKGROUND';

type SetBackgroundActionType = {
    type: typeof SET_BACKGROUND,
    url: string
}

type InitialState = {
    backgroundURL: string
}

type ActionsType = SetBackgroundActionType;

let initialState: InitialState = {
    backgroundURL: BACKGROUND_DEFAULT
}

let backgroundReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case SET_BACKGROUND:
            if (action.url !== "") {                
                return {
                    ...state,
                    backgroundURL: action.url
                }
            } else {
                return {
                    ...state,
                    backgroundURL: BACKGROUND_DEFAULT
                }
            }
        default:
            return state
    }
}

export const setBackgroundAC = (url: string): SetBackgroundActionType => {
    return {
        type: SET_BACKGROUND,
        url
    }
}

export type Dispatch = (action:ActionsType) => void;
export default backgroundReducer;