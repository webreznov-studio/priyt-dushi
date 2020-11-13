import { poetryItemType } from './../../../redux/poetryPageReducer';
import { unlikeButton, likeButton } from './FavoriteButton';

export const addIdToLocalStorage = (id: string, originArr:Array<poetryItemType>, cb:(arr:Array<poetryItemType>)=>void) => {
    let myStorage = localStorage.getItem('favoriteStorage');
    let arr: string[] = [id];
    if (myStorage !== null) {
        arr = myStorage.split(',');
        const indexItem = arr.indexOf(id);
        if (arr[indexItem] !== id) {
            arr.push(id);
        } else {
            arr.splice(indexItem, 1)
        }
    }
    localStorage.setItem('favoriteStorage', arr.join(','));
    return supportLikeButton(originArr, id, cb);
}

export const getButton = (id: string) => {
    let myStorage = localStorage.getItem('favoriteStorage');
    let arr: string[] = [];

    if (myStorage !== null) {
        arr = myStorage.split(',');
        const indexItem = arr.indexOf(id);
        if (arr[indexItem] !== id) {
            return unlikeButton;
        } else {
            return likeButton;
        }
    }
    return unlikeButton;
}

const supportLikeButton = (originArr:Array<poetryItemType>, idFavorite: string, cb:(arr:Array<poetryItemType>)=>void) => {
    const indexItem = originArr.findIndex(item => String(item.id) === idFavorite);
    const isFavoriteItem = originArr[indexItem].isFavorite;
    if (isFavoriteItem) {
        originArr[indexItem].isFavorite = false
    } else {
        originArr[indexItem].isFavorite = true
    }
    let arr: Array<poetryItemType> = JSON.parse(JSON.stringify(originArr));
    cb(arr);
}