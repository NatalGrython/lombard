import React, { FC } from 'react'
import classNames from './index.module.scss'
import def from './data/default.png'

const products: ProductType[] = [
    {
        id: '1',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
    {
        id: '2',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
    {
        id: '3',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
    {
        id: '4',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
    {
        id: '5',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
    {
        id: '6',
        name: 'TELEFON',
        category: 'telefon',
        price: 20,
    },
]

type ProductType = {
    id: string
    name: string
    price: number
    category: string
    src?: string
}
const Product: FC<ProductType> = ({ name, price, category, src }) => {
    return (
        <div className={classNames.product}>
            <img className={classNames.image} src={src || def} alt="" />
            <div className={classNames.info__wrapper}>
                <div className={classNames.title__wrapper}>
                    <div className={classNames.name__wrapper}>
                        <h3 className={classNames.name}>{name}</h3>
                        <h4 className={classNames.category}>{category}</h4>
                    </div>
                    <h3 className={classNames.price}>{price}Р</h3>
                </div>
                <button className={classNames.button}>
                    <span className={classNames.span}>В корзину</span>
                </button>
            </div>
        </div>
    )
}

const Catalog = () => {
    return (
        <div className={classNames.catalog}>
            <h2 className={classNames.title}>Каталог</h2>
            <div className={classNames.catalog__wrapper}>
                {products.map(item => (
                    <Product key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Catalog
