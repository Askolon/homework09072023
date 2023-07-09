import React from 'react'
import s from './style.module.css'

export default function ProductItem({product}) {
  return (
    <div className={s.form}>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}