import React from 'react'

export const ImgBreedGridItem = ({url}) => {
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} />
    </div>
  )
}
