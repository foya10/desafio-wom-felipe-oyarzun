import React, { useState } from 'react'
import { DogBreedsScreen } from './components/DogBreedsScreen'

export const DogLoverApp = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <img
                    src='https://dog.ceo/img/dog-api-logo.svg'
                    className='img'
                    width='100px'
                />
            </div>
            <br/>
            <div className='text-center '>
                <div className='alert alert-success p-10'>
                    <p>En la siguiente interfaz, poodrá navegar por las diferentes razas de perros, 
                        y ver imágenes de los peludos. <strong>Para iniciar haga clic en una de las razas</strong>
                    </p>
                </div>
            </div>
            <DogBreedsScreen/>
        </div>
    )
}
