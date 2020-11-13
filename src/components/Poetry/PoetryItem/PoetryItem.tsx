import React from 'react';
import './PoetryItem.css';
import { NavLink } from 'react-router-dom';
import FavoriteButtonContainer from '../../common/FavoriteButton/FavoriteButtonContainer';

let PoetryItem: React.FC<{ name: string, author: string, year: string, book: string, url: string, id: string, key: string }> = (props) => {
    return (<>
        <NavLink to={props.url} className='poetry__item'>
            <div className="poetry__item_column poetry__item_column_name">{props.name}</div>
            <div className="poetry__item_column poetry__item_column_author">{props.author}</div>
            <div className="poetry__item_column poetry__item_column_year">{props.year}</div>
            <div className="poetry__item_column poetry__item_column_book">{props.book}</div>
            <FavoriteButtonContainer idFavorite={props.id}/>
            <span className="poetry__item_line"></span>
        </NavLink>
    </>)
}

export default PoetryItem;