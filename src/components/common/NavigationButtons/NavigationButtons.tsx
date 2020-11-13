import React from 'react';
import './NavigationButtons.css'
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { State } from '../../../redux/store';
import { connect } from 'react-redux';
import { poetryItemType } from '../../../redux/poetryPageReducer';

const next = 'navigation-buttons_next';
const nextDisabled = 'navigation-buttons_next-disabled'
const prev = 'navigation-buttons_prev';
const prevDisabled = 'navigation-buttons_prev-disabled';
const url = '/poetry-page/';

type PathParamsType = {
    id: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {
    poetryPage: Array<poetryItemType>
}

const NavigationButtonsLayout = (props: PropsType) => {
    let id = props.match.params.id;
    const lastNumberItem = props.poetryPage.length;

    const getLinkToButtons = (id: string) => {
        if (+id === 1) {            
            return (<>
                <div className={`${prev} ${prevDisabled}`}><a href='url/' onClick={(e)=>e.preventDefault()}>"♦prev"</a></div>
                <div className={`${next}`}><NavLink to={`${url}${+id+1}`}>"next♦"</NavLink></div>
            </>)
        } else if (+id >= lastNumberItem) {
            return (<>
                <div className={`${prev}`}><NavLink to={`${url}${+id - 1}`}>"♦prev"</NavLink></div>
                <div className={`${next} ${nextDisabled}`}><a href='url/' onClick={(e)=>e.preventDefault()}>"next♦"</a></div>
            </>)
        } else {
            return (<>
                <div className={`${prev}`}><NavLink to={`${url}${+id - 1}`}>"♦prev"</NavLink></div>
                <div className={`${next}`}><NavLink to={`${url}${+id + 1}`}>"next♦"</NavLink></div>
            </>)
        }
    }
    return (<div className="navigation-buttons__wrapper">
        {getLinkToButtons(id)}
    </div>)
}

const NavigationButtons = withRouter(NavigationButtonsLayout);

const mapState = (state: State) => {
    return {
        poetryPage: state.poetryPage.poetryItemsArray,
    }
}

const NavigationButtonsContainer = connect(mapState)(NavigationButtons);

export default NavigationButtonsContainer;