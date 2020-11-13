import './Poetry.css';
import React from 'react';
import { poetryItemType } from '../../redux/poetryPageReducer';
import PoetryItem from './PoetryItem/PoetryItem';
import PagintaionItem from './PagintionItem/PaginationItem';
import SearchBlockContainer from '../common/SearchBlock/SearchBlockContainer';
import FilterBlockContainer from '../common/FilterBlock/FilterBlockContainer';
const shortid = require('shortid');

type PropsType = {
    namePage: string
    currentPage: number
    sizePage: number
    poetryPage: Array<poetryItemType>
    backendService(setItems: (arr: Array<poetryItemType>) => void): void
    setBackground(url: string): void
    setPoetryItems(arr: Array<poetryItemType>): void
    setCurrentPage(currentPage: number): void
}

class Poetry extends React.Component<PropsType>{
    componentDidMount() {
        this.props.backendService(this.props.setPoetryItems);
    }

    pageItemsRender = (arrayItems: Array<{}>, currentPage: number, sizePage: number) => {
        let portionItemsCollection: any = [];
        let i = sizePage;

        do {
            let count = currentPage * sizePage;
            portionItemsCollection.push(arrayItems[count - i]);
            i--;
        } while (i)

        return portionItemsCollection;
    }

    render() {

        // this.props.setBackground('https://pearpoof.ru/zoreva/images/balloons.gif');        

        let poetryArray = this.props.poetryPage.map((i) => <PoetryItem
            name={i.name}
            author={i.author}
            year={i.year}
            book={i.book}
            url={`/poetry-page/${i.id}`}
            id={String(i.id)}
            key={shortid.generate()}
        />);

        return (<div className='poetry__wrapper'>
            <h1 className='common__title'>{this.props.namePage}</h1>

            <SearchBlockContainer />

            <FilterBlockContainer />

            <div className="poetry__pagination">
                {this.props.poetryPage.length > 10 ? <PagintaionItem
                    currentPage={this.props.currentPage}
                    sizePage={this.props.sizePage}
                    arrayItems={this.props.poetryPage}
                    setCurrentPage={this.props.setCurrentPage} /> : <div></div>}
            </div>
            <div className="poetry__block">
                {this.pageItemsRender(poetryArray, this.props.currentPage, this.props.sizePage)}
            </div>
        </div>)
    }
}

export default Poetry;