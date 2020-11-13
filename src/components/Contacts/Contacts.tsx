import React from 'react';
import s from  './contacts.module.css';
const urlVk: string = String(process.env.REACT_APP_URL_VK);
const urlInstagram: string = String(process.env.REACT_APP_URL_INSTAGRAM);
const urlEmail: string = String(process.env.REACT_APP_URL_EMAIL);

const Contacts: React.FC<{}> = () => {
    return (<div className='about__wrapper'>
        <h1 className='common__title'>Контакты</h1>
        <ul className={s.contacts_list}>
            <li className={s.contacts_list_item}>
                <strong className={s.contacts_list_item_name}>Почта:</strong>
                <a href={urlEmail} className={s.contacts_list_item_link}>zoreva@mail.ru<span></span></a>
            </li>
            <li className={s.contacts_list_item}>
                <strong className={s.contacts_list_item_name}>Instagram:</strong>
                <a href={urlInstagram} className={s.contacts_list_item_link} rel="noopener noreferrer" target='_blank'>@zoreva.priuyt.dyshi<span></span></a>
            </li>
            <li className={s.contacts_list_item}>
                <strong className={s.contacts_list_item_name}>Группа Вконтакте:</strong>
                <a href={urlVk} className={s.contacts_list_item_link} rel="noopener noreferrer" target='_blank'>zoreva.priuyt.dyshi<span></span></a>
            </li>
        </ul>
        
    </div>)
}

export default Contacts;