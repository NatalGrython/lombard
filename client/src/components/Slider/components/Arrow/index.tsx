import React, { FC } from 'react'

export type ArrowType = {
    reverse: boolean
    onClick: () => void
}

export const Arrow: FC<ArrowType> = ({ reverse = false, onClick }) => (
    <svg
        onClick={onClick}
        width="19"
        height="15"
        viewBox="0 0 19 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 7.38102H17.75M17.75 7.38102L12.1447 0.901855M17.75 7.38102L12.1447 13.8602"
            stroke="#1C1C1C"
            strokeWidth="0.647917"
        />
    </svg>
)
