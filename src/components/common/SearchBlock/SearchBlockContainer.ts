// import React from 'react';
import { State } from '../../../redux/store';
import { setSearchWordInputAC, Dispatch } from '../../../redux/searchReducer';
import { setPoetryItemsAC, poetryItemType, Dispatch as DispatchPoetryPage } from '../../../redux/poetryPageReducer';
import SearchBlock from './SearchBlock';
import { connect } from 'react-redux';

const mapState = (state: State) => ({
    poetryArray: state.poetryPage.poetryItemsArray,
    searchWord: state.searchWord.searchWordInput
})

const mapDispatch = (dispatch: Dispatch & DispatchPoetryPage) => ({
    setSearchWordInput: (searchWord: string): void => {
        dispatch(setSearchWordInputAC(searchWord))
    },    
    setPoetryItems: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))
    },
})

let SearchBlockContainer = connect(mapState, mapDispatch)(SearchBlock);

export default SearchBlockContainer;