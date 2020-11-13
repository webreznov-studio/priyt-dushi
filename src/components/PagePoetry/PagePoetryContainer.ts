import { connect } from 'react-redux';
import { poetryItemType, Dispatch, setPoetryItemsAC } from '../../redux/poetryPageReducer';
import { State } from '../../redux/store';
import PagePoetryUrl from './PagePoetry';

const mstp = (state: State) => {
    return {
        poetryPage: state.poetryPage.poetryItemsArray,
    }
}

const mapDispatch = (dispatch: Dispatch) => ({
    setPoetryItems: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))
    }
})

let PagePoetryContainer = connect(mstp, mapDispatch)(PagePoetryUrl);

export default PagePoetryContainer;