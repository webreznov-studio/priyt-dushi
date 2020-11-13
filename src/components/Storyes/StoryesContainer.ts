import { poetryItemType } from './../../redux/poetryPageReducer';
import { Dispatch } from './../../redux/storyesReducer';
import { setStoryesItemsAC } from './../../redux/storyesReducer';
import { connect } from "react-redux";
import { State } from '../../redux/store';
import Storyes from "./Storyes";

let mapStateToProps = (state: State) => ({
    storyesPageItems: state.storyPage.storyesItemsArray
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    setStoryesItems: (arr: Array<poetryItemType>): void => {
        dispatch(setStoryesItemsAC(arr))
    }
})

let StoryesContainer = connect(mapStateToProps, mapDispatchToProps)(Storyes);

export default StoryesContainer;