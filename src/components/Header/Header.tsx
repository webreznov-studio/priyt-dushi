import React, { useState } from 'react';
import './Header.css';
import logoImg from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import ExtraMenu from './ExtraMenu/ExtraMenu';


const Header: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerClickMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const setClassMenu = () => isOpen ? 'is-open' : '';

    return (<>
        <header className='header'>
            <div className='header__logo'>
                <NavLink to='/'>
                    <img src={logoImg} alt="" className='header__logo_img' />
                </NavLink>
            </div>
            <div className={`menu-btn ${setClassMenu()}`} onClick={()=>handlerClickMenu()}></div>
            <div className='header__menu'>
                <div className="header__menu__block header__menu__block-left">
                    <div className="header__menu__block_item">
                        <NavLink to='/about'>Об авторе<span></span></NavLink>

                        <ExtraMenu />
                    </div>
                    <div className="header__menu__block_item">
                        <NavLink to='/poetry'>Стихи<span></span></NavLink>
                    </div>
                </div>
                <div className="header__menu__block header__menu__block-right">
                    <div className="header__menu__block_item">
                        <NavLink to='/storyes'>Рассказы<span></span></NavLink>
                    </div>
                    <div className="header__menu__block_item">
                        <NavLink to='/contacts'>Контакты<span></span></NavLink>
                    </div>
                </div>
            </div>
        </header>
    </>);
}

export default Header;