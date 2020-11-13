import axios from 'axios';
import { poetryItemType } from './redux/poetryPageReducer';

type modeType = 'story' | 'poetry' | 'favorite';

const urlData: string = String(process.env.REACT_APP_URL_PATH_DATA);

const errorMessage: Array<poetryItemType> = [
    {
        id: 0,
        name: "Ошибка сервера. Попробуйте перезагрузить страницу.",
        author: "",
        year: "",
        book: "",
        background: "",
        isFavorite: false,
        text: ["", ""]
    }
]

let backendService = {
    requestToServer: (setFunction: (arr: Array<poetryItemType>) => void, responseMode: modeType) => {        
        axios.get(urlData)
            .then((response: any) => {
                let requestArr: Array<poetryItemType> = 
                (responseMode === 'story') ? response.data.storyesData.data : response.data.poetryData.data;
                            
                const myStorage: string = String(localStorage.getItem('favoriteStorage'));
                
                let arrFavorite: Array<poetryItemType> = [];
                requestArr.forEach((i)=>{
                    
                    const isIncludesItem = myStorage.split(',').includes(String(i.id));
                    
                    if(i.name === '***') i.name = i.text[0];                                        
                    if(myStorage !== 'null' && isIncludesItem){
                        i.isFavorite = true;
                    }
                    if(responseMode === 'favorite' && i.isFavorite){                        
                        arrFavorite.push(i)                
                    }
                });

                requestArr = (responseMode === 'favorite') ? arrFavorite : requestArr;
                
                setFunction(requestArr);
            })
            .catch(error => {
                setFunction(errorMessage)
                console.log(error.response)
            });
    },
    backendStoryes: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'story')        
    },
    backendPoetry: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'poetry')        
    },
    backendFavorite: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'favorite')        
    }
}

export default backendService;