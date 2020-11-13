import React from 'react';
import './filterBlock.css';
import { poetryItemType } from '../../../redux/poetryPageReducer';
import { sortArray } from './FilterBlockService';
import { ConditionSortType, SORT_NAME, SORT_AUTHOR, SORT_YEAR, SORT_BOOK } from '../../../redux/filterReducer';

type PropsType = {
    arrayItems: poetryItemType[]
    filterType: ConditionSortType
    setSortArray(arr: Array<poetryItemType>): void
    setFilterType(filterType: ConditionSortType): void
}

const FilterBlock: React.FC<PropsType> = (props) => {
    return (<>
        <div className='filter__block'>
            <div className="filter__item_column filter__item_column_name">
                <button className={props.filterType === SORT_NAME ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_NAME);
                    sortArray<poetryItemType, 'name'>(props.arrayItems, 'name', props.setSortArray);
                }}>Название</button>
            </div>
            <div className="filter__item_column filter__item_column_author">
                <button className={props.filterType === SORT_AUTHOR ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_AUTHOR);
                    sortArray<poetryItemType, 'author'>(props.arrayItems, 'author', props.setSortArray);
                }}>Автор</button>
            </div>
            <div className="filter__item_column filter__item_column_year">
                <button className={props.filterType === SORT_YEAR ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_YEAR);
                    sortArray<poetryItemType, 'year'>(props.arrayItems, 'year', props.setSortArray);
                }}>Год</button>
            </div>
            <div className="filter__item_column filter__item_column_book">
                <button className={props.filterType === SORT_BOOK ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_BOOK);
                    sortArray<poetryItemType, 'book'>(props.arrayItems, 'book', props.setSortArray);
                }}>Книга</button>
            </div>
        </div>
    </>)
}

export default FilterBlock;