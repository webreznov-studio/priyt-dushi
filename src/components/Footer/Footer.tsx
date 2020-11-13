import React from 'react';
import style from './footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (<footer className={style.footer}>
        <div className={style.footer_block}>
            <p>Карта сайта</p>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/about'>Об авторе</NavLink>
            <NavLink to='/poetry'>Стихи</NavLink>
            <NavLink to='/storyes'>Рассказы</NavLink>
            <NavLink to='/favorite'>Избранное</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
        </div>
        <div className={style.footer_block}>
            <p>Копирование материалов сайта без соглашения автора строго запрещено!</p>
        </div>
        <div className={style.footer_block}>
            <p>"Приют души" - авторский портал Людмилы Ремизовой. 2020</p>
        </div>
    </footer>)
}

export default Footer;