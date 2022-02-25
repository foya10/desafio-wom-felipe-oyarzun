import React, { useState } from 'react'
import { useFetchBreeds } from '../hooks/useFetchBreeds'
import { BreedItem } from './ui/BreedItem';
import { ImgsBreedGrid } from './ui/ImgsBreedGrid';
import { Loading } from './ui/Loading';

export const DogBreedsScreen = () => {
    const {data,loading} = useFetchBreeds(); 
    const [breedSelected, setBreedSelected] = useState('');
    return ( 
      <>
        {
          loading && <Loading/>
        }
        <div className='row'>
          <div className='col-3'>
            <div className='breed-list'>
                  {
                    data.map(breed=>(
                      <BreedItem
                        setBreedSelected ={setBreedSelected}
                        key={breed.name}
                        {...breed}
                      />
                    ))
                  }
            </div> 
          </div> 
          <div className='col-9'>
            {breedSelected ? (
                <ImgsBreedGrid breedSelected ={ breedSelected } key={ breedSelected} />
            ) : (
              <div className='text-center initial-message'>
                <div className='alert alert-info'>Seleccione una de las razas de perro de la izquierda para ver sus imágenes</div>
              </div>
            )}
          </div>
        </div>
      </>
    )
}
