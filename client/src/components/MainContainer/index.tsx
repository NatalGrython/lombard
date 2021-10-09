import React, { FC } from 'react'
import Header from '../Header'
import classNames from './index.module.scss'

const MainContainer: FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={classNames.main__wrapper}> {children}</div>
        </div>
    )
}

export default MainContainer
