import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types';
import { Button } from './Button';

export const BreedItem = ({setBreedSelected,name}) => {
  const [breedValue, setBreedValue] = useState(name);
  const handleClick = (e)=>{
    setBreedValue(e.target.getAttribute('breed'));
    setBreedSelected(breedValue);
  }

  return (
    <div className="breed-item">
      <div className='row'>
        <div className='col-9'>
          <label className="breed-item-title">Raza: {name}</label>
        </div>
        <div className='col-3'>
          <Button handleClick={handleClick} name={name} type='button' customClass='btn btn-outline-primary' />
        </div>
      </div>
    </div>
  )
}
BreedItem.propTypes = {
  setBreedSelected:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
}
