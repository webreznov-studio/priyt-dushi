import React from 'react';
import './paginationItem.css';
const shortid = require('shortid');

type PropsType = {
    currentPage: number
    sizePage: number
    arrayItems: Array<{}>
    setCurrentPage: (currentPage: number) => void
}
class PagintaionItem extends React.Component<PropsType> {

    render() {
        let arrButtons: any = [];
        let sizeArr: number = this.props.arrayItems.length;
        let totalPage: number = Math.ceil(sizeArr / this.props.sizePage);

        for (let i = 1; i <= totalPage; i++) {
            if (i === this.props.currentPage) {
                arrButtons.push(<div className='pagination__item pagination__item-active' id={`${i}`} key={shortid.generate()} >{`${i}`}</div>)
            } else {
                arrButtons.push(<div className='pagination__item' id={`${i}`} key={shortid.generate()} onClick={() => { this.props.setCurrentPage(+`${i}`) }} >{`${i}`}</div>)
            }
        }

        let newArr = arrButtons.slice(this.props.currentPage - 1, this.props.currentPage + 4);

        if (this.props.currentPage < 5) {
            newArr = arrButtons.slice(0, 5);
            newArr.push(<div className='pagination__item' key={shortid.generate()}>...</div>);
            newArr.push(<div className='pagination__item' id={`${totalPage}`} key={shortid.generate()} onClick={() => { this.props.setCurrentPage(+`${totalPage}`) }} >{`${totalPage}`}</div>);
        }

        if (this.props.currentPage >= 5 && this.props.currentPage <= totalPage - 4) {
            newArr = arrButtons.slice(this.props.currentPage - 3, this.props.currentPage + 2);
            newArr.unshift(<div className='pagination__item' key={shortid.generate()}>...</div>);
            newArr.unshift(arrButtons.shift());
            newArr.push(<div className='pagination__item' key={shortid.generate()}>...</div>);
            newArr.push(arrButtons[arrButtons.length - 1]);
        }

        if (this.props.currentPage >= totalPage - 3) {
            newArr = arrButtons.slice(-5);
            newArr.unshift(<div className='pagination__item' key={shortid.generate()}>...</div>);
            newArr.unshift(<div className='pagination__item' id={`${1}`} key={shortid.generate()} onClick={() => { this.props.setCurrentPage(+`${1}`) }} >{`${1}`}</div>);
        }

        return newArr;
    }
}

export default PagintaionItem;