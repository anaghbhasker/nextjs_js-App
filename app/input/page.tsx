import React from 'react'
import style from './style.module.css'

export default function Page() {
  return (
    <div className={style.inputBox}>
      <div>
        <label htmlFor="input">To:</label>
      </div>
      <div className={style.inputWrapper}>
        <input type="text" id="input" className={style.input} />
      </div>
    </div>
  )
}
