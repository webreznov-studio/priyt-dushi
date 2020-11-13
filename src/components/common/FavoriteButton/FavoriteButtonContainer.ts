import { Dispatch, poetryItemType, setPoetryItemsAC } from './../../../redux/poetryPageReducer';


import { State } from './../../../redux/store';
import { connect } from 'react-redux';
import FavoriteButton from './FavoriteButton';

const mapState = (state: State) => ({    
    poetryPage: state.poetryPage.poetryItemsArray      
})

const mapDispatch = (dispatch: Dispatch) => ({
    setPoetryItems: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))
    }
})

let FavoriteButtonContainer = connect(mapState, mapDispatch)(FavoriteButton);

export default FavoriteButtonContainer;