import { useCallback, useMemo, useRef, useState } from 'react'
import { Settings, default as SliderInner } from 'react-slick'
import { dataArray } from '../data'

export const useSlider = () => {
    const ref = useRef<SliderInner>(null)
    const [count, setCount] = useState(0)
    const currentItem = useMemo(() => dataArray[count], [count])

    const settings: Settings = {
        dots: false,
        initialSlide: count,
        infinite: true,
        speed: 500,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, nextSlide) => setCount(nextSlide),
    }

    const onClickDot = useCallback(
        (slideNumber: number) => () => {
            if (ref.current) {
                ref.current.slickGoTo(slideNumber)
            }
        },
        []
    )

    const onClickRigthArrow = useCallback(() => {
        if (ref.current) {
            ref.current.slickNext()
        }
    }, [])

    return {
        ref,
        settings,
        count,
        onClickDot,
        onClickRigthArrow,
        currentItem,
        items: dataArray,
    }
}
