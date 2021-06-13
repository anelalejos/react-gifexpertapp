
import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {
    
    

    // const categories = ["One Punch","Samurai X","Dragon Ball"];
    const [categories, setCategories] = useState(['Sailor Moon']);

    //Boton
    // const handleAdd = () => {
    //     // setCategories ( [...categories, "Sailor Moon"])
    //     setCategories( cats => [ ...cats, "HunterXHunter"]);}

    return (
        <>
            <h2>GifExpertApp</h2>
                <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    categories.map(( category => 
                    // <li key={category}> {category} </li>
                    <GifGrid 
                    key={ category }
                    category={ category } />
                    ))
                    
                }

                
            </ol>

        </> 

    )
}
                          