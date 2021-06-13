
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridIteam } from './GifGridIteam';


export const GifGrid = ({category}) => { 

    const { data,loading} = useFetchGifs(category);

    
    // useEffect( () => {
    //     getGifs ( category )
    //         .then( setImages );
    // }, [ category ])
    
    
    // getGifs(); 

    return (
        <>
            <h3 classname = "card animate__animated animate__bounce">  { category } </h3>
            { loading ? 'Cargando...' : ''}
                <div className ="card-grid">
             
                        {
                            data.map( img => (
                                <GifGridIteam 
                                key={ img.id }
                                { ...img }  
                                />
                            ))
                        }

                 </div>
        </>
        
    )
}
























