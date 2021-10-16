import React from 'react'
import Logo from '../Logo'
import classNames from './index.module.scss'

const Header = () => {
    return (
        <div className={classNames.header}>
            <Logo />
            <h1 className={classNames.link}>Товары хыхыхы ci/cd</h1>
            <h1 className={classNames.link}>Продажа</h1>
            <h1 className={classNames.link}>О нас</h1>
            <h1 className={classNames.link}>Личный кабинет</h1>
        </div>
    )
}

export default Header
