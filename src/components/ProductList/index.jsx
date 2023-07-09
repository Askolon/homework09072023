import React from 'react'
import ProductItem from '../ProductItem'
import s from './style.module.css'

export default function ProductList({products}) {
  return (
    <div className={s.product}>
      {
        products.map(product => (<ProductItem key={product} product={product}/>))
      }
    </div>
  );
}