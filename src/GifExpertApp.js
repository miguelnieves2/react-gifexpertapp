import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['Gta V']);


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} ></AddCategory>
        <hr></hr>
        

        <ol>
            {
                categorias.map(categoria =>( 
                    <GifGrid 
                        key={ categoria }
                        categoria={ categoria } />
                ))
            }
        </ol>
    </>
  )
}
