import React, { FC } from 'react'
import Header from '../Header'

const MainContainer: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default MainContainer
