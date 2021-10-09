import React, { FC, useMemo } from 'react'
import { default as SliderInner } from 'react-slick'
import { Arrow } from './components/Arrow'
import { Bullet } from './components/Bullet'
import { useSlider } from './hooks'
import classNames from './index.module.scss'

const Slider: FC = () => {
    const {
        ref,
        settings,
        count,
        onClickDot,
        onClickRigthArrow,
        items,
        currentItem,
    } = useSlider()

    const renderedItems = useMemo(
        () =>
            items.map(item => (
                <img
                    key={item.name}
                    className={classNames.image}
                    src={item.src}
                    alt={item.name}
                />
            )),
        [items]
    )

    const renderedDots = useMemo(
        () =>
            items.map(item => (
                <Bullet
                    key={item.count}
                    completed={count === item.count}
                    onClick={onClickDot(item.count)}
                />
            )),
        [items, count, onClickDot]
    )

    return (
        <div className={classNames['content-wrapper']}>
            <SliderInner ref={ref} {...settings}>
                {renderedItems}
            </SliderInner>
            <h1 className={classNames.main}>
                Скупим электронику по высокой цене
            </h1>
            <button className={classNames.button}>
                <span className={classNames.span}>Связаться</span>
            </button>

            <div className={classNames.slider__menu}>
                <div className={classNames.slider__wraper}>
                    <p className={classNames.count}>{`0${count + 1} / 0${
                        items.length
                    }`}</p>
                    <div className={classNames.name_container}>
                        <h2 className={classNames.name}>{currentItem.name}</h2>
                        <Arrow reverse={false} onClick={onClickRigthArrow} />
                    </div>
                    <div className={classNames.bullet_container}>
                        {renderedDots}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider
