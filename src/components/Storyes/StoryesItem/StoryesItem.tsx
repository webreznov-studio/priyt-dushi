import React from 'react';
import PoetryItem from '../../Poetry/PoetryItem/PoetryItem';

let StoryItem: React.FC<{ name: string, author: string, year: string, book: string, url: string, id: string, key: string }> = (props) => {
    return (<PoetryItem 
        name={props.name} 
        author={props.author} 
        year={props.year} 
        book={props.book} 
        url={props.url} 
        id={props.id}
        key={props.key}/>)
}

export default StoryItem;