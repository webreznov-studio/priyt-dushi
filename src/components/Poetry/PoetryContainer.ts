import { setCurrentPage } from './../../redux/poetryPageReducer';
import { setBackgroundAC, Dispatch as DispatchBG } from "./../../redux/backgroundRedecur";
import { connect } from 'react-redux';
import { setPoetryItemsAC, poetryItemType, Dispatch } from '../../redux/poetryPageReducer';
import { State } from '../../redux/store';
import Poetry from './Poetry';
import backendService from '../../backendService';

const mapState = (state: State) => ({
    namePage: 'Стихи',
    currentPage: state.poetryPage.currentPage,
    sizePage: state.poetryPage.sizePage,
    poetryPage: state.poetryPage.poetryItemsArray,
    backendService: backendService.backendPoetry    
})

const mapDispatch = (dispatch: Dispatch & DispatchBG) => ({
    setBackground: (url: string): void => {
        dispatch(setBackgroundAC(url))
    },
    setPoetryItems: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))
    },
    setCurrentPage: (currentPage: number): void => {
        dispatch(setCurrentPage(currentPage))
    }
})

let PoetryContainer = connect(mapState, mapDispatch)(Poetry);

export default PoetryContainer;