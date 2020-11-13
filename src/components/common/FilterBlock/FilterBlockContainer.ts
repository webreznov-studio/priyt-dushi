import { setFilterTypeInputAC, ConditionSortType, Dispatch as DipatchFilter } from './../../../redux/filterReducer';
import { State } from '../../../redux/store';
import { setPoetryItemsAC, poetryItemType, Dispatch } from '../../../redux/poetryPageReducer';
import { connect } from 'react-redux';
import FilterBlock from './FilterBlock';

const mapState = (state: State) => ({
    arrayItems: state.poetryPage.poetryItemsArray,
    filterType: state.filterState.filterType
})

const mapDispatch = (dispatch: Dispatch & DipatchFilter) => ({
    setSortArray: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))        
    },
    setFilterType: (filterType: ConditionSortType): void => {        
        dispatch(setFilterTypeInputAC(filterType))
    }
})

const FilterBlockContainer = connect(mapState, mapDispatch)(FilterBlock);

export default FilterBlockContainer;