import { poetryItemType } from './../../redux/poetryPageReducer';
import { setCurrentPage } from './../../redux/favoritePageReducer';
import { setBackgroundAC, Dispatch as DispatchBG } from "./../../redux/backgroundRedecur";
import { connect } from 'react-redux';
import { setPoetryItemsAC, Dispatch } from '../../redux/favoritePageReducer';
import { State } from '../../redux/store';
import Poetry from '../Poetry/Poetry';
import backendService from '../../backendService';


const mapState = (state: State) => ({
    namePage: 'Избранное',
    currentPage: state.favoritePage.currentPage,
    sizePage: state.favoritePage.sizePage,
    poetryPage: state.favoritePage.favoriteItemsArray,
    backendService: backendService.backendFavorite
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

const FavoritePageContainer = connect(mapState, mapDispatch)(Poetry);

export default FavoritePageContainer;