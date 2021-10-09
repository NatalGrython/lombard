import React, { FC } from 'react'

export type BulletType = {
    completed: boolean
    onClick: () => void
}

export const Bullet: FC<BulletType> = ({ completed = false, onClick }) => (
    <div onClick={onClick}>
        <svg
            width="77"
            height="1"
            viewBox="0 0 77 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                {...(completed
                    ? {
                          x1: '0.545898',
                          y1: '0.676042',
                          x2: '77.0001',
                          y2: '0.676042',
                          stroke: '#1C1C1C',
                          strokeWidth: '0.647917',
                      }
                    : {
                          y1: '0.676042',
                          x2: '76.4542',
                          y2: '0.676042',
                          stroke: '#1C1C1C',
                          strokeOpacity: '0.5',
                          strokeWidth: '0.647917',
                      })}
            />
        </svg>
    </div>
)
