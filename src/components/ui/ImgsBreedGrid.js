//import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchImgsBreed } from '../../hooks/useFetchImgsBreed';
import { ImgBreedGridItem } from './ImgBreedGridItem';
import { Loading } from './Loading';

export const ImgsBreedGrid = ({breedSelected}) => {
    const {data,loading} = useFetchImgsBreed(breedSelected);
    return (
      <>
        <h3>Raza: {breedSelected}</h3>
        {
          loading && <Loading />
        }
        <div className='card-grid'>
              {
                data.map(imgBreed=>(
                  <ImgBreedGridItem 
                    key={Math.random()}
                    {...imgBreed}
                  />
                ))
              }
        </div>  
      </>
    )

}

