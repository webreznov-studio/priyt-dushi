import React from 'react';
import './Background.css';
import { connect } from 'react-redux';

type PropsType = {
    url: string,    
}

export const Background: React.FC<PropsType> = (props) => {        
    return (
        <div className='background'>
            <img src={props.url} alt="background" />
            <div className='background_wrapper'></div>
        </div>
    )
}

let mstp = (state: any) => {
    return {
        url: state.background.backgroundURL
    }
}

let BackgroundContainer = connect(mstp)(Background)

export default BackgroundContainer;