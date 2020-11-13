import React from 'react';
import './Storyes.css';
import { poetryItemType } from '../../redux/poetryPageReducer';
import StoryItem from './StoryesItem/StoryesItem';
import backendService from '../../backendService';
const shortid = require('shortid');

type PropsType = {
    storyesPageItems: Array<poetryItemType>
    setStoryesItems(storyArr: Array<poetryItemType>): void
}

class Storyes extends React.Component<PropsType>{
    componentDidMount() {        
        backendService.backendStoryes(this.props.setStoryesItems)
    }

    render() {
        let storyesItems = this.props.storyesPageItems.map((i) => <StoryItem
            name={i.name}
            author={i.author}
            year={i.year}
            book={i.book}
            url={`/story-page:${i.id}`}
            id={String(i.id)}
            key={shortid.generate()}
        />)
        return <div className='storyes__wrapper'>
            <h1 className='common__title'>Рассказы</h1>
            {storyesItems}
        </div>
    }
}

export default Storyes;