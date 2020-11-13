import React from 'react';
import s from './favoritePage.module.css';
import FavoritePageContainer from './FavoritePageContainer';


class FavoritePage extends React.Component{
    render(){
        return (<div className={s.container}>            
            <FavoritePageContainer/>
        </div>)
    }
}

export default FavoritePage;