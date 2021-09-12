import React from 'react'
import classNames from './index.scss'

const Header = () => {
    return (
        <div className={classNames['.header']}>
            <h1>Logo</h1>
            <div>
                <h1>Главная</h1>
                <h1>Товары</h1>
                <h1>Оценка</h1>
                <h1>О нас</h1>
            </div>
        </div>
    )
}

export default Header
