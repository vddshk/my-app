import React from 'react';
export default function Header() {
    return (
        <header>
            <div className='white_header'>
                <div className='logo&text_logo'>
                    <img src="/Лого.svg" alt="Logo" />
                    <span className="text_logo">Колбасы и мясные деликатесы</span>
                </div>
                <div className='izb_korz'>
                    <a href="#"> <img src="/Избранное.svg" alt="Избранное" className='izb' /> </a>
                    <a href="#"> <img src="/Корзина.svg" alt="Корзина" /> </a>
                </div>
                <div className='mobile_izb_korz'>
                    <a href="#"> <img src="/Избранное_mobile.svg" alt="Избранное" /> </a>
                    <a href="#"> <img src="/Корзина_mobile.svg" alt="Корзина" /> </a>
                </div>
            </div>
            <div className='blue_header'>
                <div className='navigate_header'>
                    <a href='#' className='text_blue_header'>О РЕСНОТЕ</a>
                    <a href='#' className='text_blue_header'>КАТАЛОГ</a>
                    <a href='#' className='text_blue_header'>НАШИ МАГАЗИНЫ</a>
                    <a href='#' className='text_blue_header'>КОНТАКТЫ</a>
                </div>
                <div className='poisk_img'>
                    <a href="#"> <img src="/Поиск.svg" alt="Поиск" className='poisk_img' /> </a>
                </div>
            </div>
            <div className='mobile_blue_header'>
                <div className='mobile_navigate_header'>
                    <a href='#'> <img src="/Group 18.svg" alt="Group 18" /> </a>
                    <a href='#'> <img src="/Vector.svg" alt="Vector" /> </a>
                </div>
            </div>
        </header>
    )
}