import React from 'react'
import Catalog from './components/Catalog'
import MainContainer from './components/MainContainer'
import Slider from './components/Slider'
import './index.module.scss'

function App() {
    return (
        <MainContainer>
            <Slider />
            <Catalog />
        </MainContainer>
    )
}

export default App
