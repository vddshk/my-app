import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className='blue_footer'>
                <div className='text_blue_footer'>
                    <h1 className='text_questions1'>Есть вопросы?</h1>
                    <p className='text_questions2'> Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время. </p>
                </div>
                <div className='frame_image'>
                    <img src="/Frame.svg" alt="Frame" />
                </div>
                <div className='img_ooc'>
                    <div>
                        <div className="form_ooc">
                            <div className="group_one">
                                <img src="/Group 2.svg" alt="Group 2" />
                                <img src="/Group 3.svg" alt="Group 3" />
                            </div>
                            <div className='group_two'>
                                <img src="/Group 7.svg" alt="Group 7" />
                            </div>
                        </div>
                        <div className='agree_ooc'>
                            <div className='checkbox'>
                                <div className='input_label'>
                                    <input type="checkbox" id="agree1" />
                                    <label htmlFor="agree1">Даю согласие на рассылку рекламных материалов, акций и скидок</label>
                                </div>
                                <div className='input_label'>
                                    <input type="checkbox" id="agree2" />
                                    <label htmlFor="agree2">Даю согласие на обработку моих персональных данных</label>
                                </div>
                            </div>
                            <div>
                                <a href="#"> <img src="/send.svg" alt="send" className='send_button' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white_footer'>
                <div className='white_footer1'>
                    <div className='hat_navigate'>
                        <h1 className='Product'>Продукция</h1>
                    </div>
                    <div className='hat_navigate1'>
                        <div className='block_nav1'>
                            <div>
                                <a href="#" className='block_nav1_1'>Колбасные и мясные изделия</a>
                            </div>
                            <div className='block_nav_second_margin'>
                                <a href="#" className='block_nav1_1'>Молочные продукты</a>
                            </div>
                        </div>
                        <div className='block_nav2'>
                            <div>
                                <a href="#" className='block_nav2_1'>Морепродукты</a>
                            </div>
                            <div className='block_nav_second_margin'>
                                <a href="#" className='block_nav2_1'>Пиво</a>
                            </div>
                        </div>
                        <div className='block_nav3'>
                            <div>
                                <a href="#" className='block_nav3_1'>Замороженные продукты</a>
                            </div>
                            <div className='block_nav_second_margin'>
                                <a href="#" className='block_nav3_1'>Мед</a>
                            </div>
                        </div>
                        <div className='block_nav4'>
                            <div>
                                <a href="#" className='block_nav4_1'>Свежие овощи</a>
                            </div>
                            <div className='block_nav_second_margin'>
                                <a href="#" className='block_nav4_1'>Свежие фрукты</a>
                            </div>
                        </div>
                    </div>
                    <div className='mobile_white_footer1'>
                        <div className="mobile_block_nav1">
                            <a href="#" className='block_nav1_1'>Колбасные и мясные изделия</a>
                            <a href="#" className='block_nav1_1'>Молочные продукты</a>
                            <a href="#" className='block_nav1_1'>Морепродукты</a>
                            <a href="#" className='block_nav1_1'>Пиво</a>
                        </div>
                        <div className='mobile_block_nav2'>
                            <a href="#" className='block_nav1_1'>Замороженные продукты</a>
                            <a href="#" className='block_nav1_1'>Мед</a>
                            <a href="#" className='block_nav1_1'>Свежие овощи</a>
                            <a href="#" className='block_nav1_1'>Свежие фрукты</a>
                        </div>
                    </div>
                </div>
                <div className='white_footer2'>
                    <div>
                        <a href='#' className='white_footer2_text_1'>О компании</a>
                    </div>
                    <div>
                        <a href='#' className='white_footer2_text_2'>Наши магазины</a>
                    </div>
                    <div>
                        <a href='#' className='white_footer2_text_3'>Контакты</a>
                    </div>
                </div>
                <div className='mobile_white_footer2'>
                    <div className='block_white_footer2'>
                        <a href='#' className='white_footer2_text_1'>О компании</a>
                        <a href='#' className='white_footer2_text_1'>Контакты</a>
                    </div>
                    <div className='block_white_footer2_2'>
                        <a href='#' className='white_footer2_text_1'>Наши магазины</a>
                    </div>
                </div>
                <div className='Line_4_img'>
                    <img src="\Line 4.svg" alt="Line 4" />
                </div>
                <div className='white_footer3'>
                    <div className='copyright'>
                        <p>2016–2021 © ООО «ПД Реснота»</p>
                    </div>
                    <div className='social_network'>
                        <a href="#"> <img src="Facebook.svg" alt="Facebook" /> </a>
                        <a href="#"> <img src="VK.svg" alt="VK" /> </a>
                        <a href="#"> <img src="Instagram.svg" alt="Instagram" /> </a>
                    </div>
                    <div className='who_made'>
                        <p>Разработка и продвижение сайта — SEOabsolut</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}