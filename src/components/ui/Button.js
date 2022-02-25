import React from 'react'

export const Button = ({handleClick,name,customClass,type}) => {
  return (
    <button
        key = {Math.random()}
        breed = {name}
        type={type}
        className={customClass}
        onClick={handleClick}
    >
        <i className='fa-solid fa-circle-chevron-right'></i>
    </button>
  )
}
