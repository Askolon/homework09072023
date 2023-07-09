import React from 'react'
import s from './style.module.css'

export default function AddProducts({ submit }) {
  return (
    <div>
      <form onSubmit={submit} className={s.form}>
        <div>
        <input type="text" name='title' placeholder='Название' />
        <input type="number" name='price' placeholder='Цена' />
        </div>
        <div>
        <button>Добавить</button>
        </div>
        
      </form>
    </div>
  )
}