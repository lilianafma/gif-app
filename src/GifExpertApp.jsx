import { useState } from 'react';
import { AddCategory, GifGrid } from './Componets';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newValue ) => {
        if( categories.includes(newValue)) return;
        setCategories( [ newValue , ...categories ] );
    }

    return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory onNewCategory = { onAddCategory } />


        { categories.map( category => (
                <GifGrid key = { category} category= { category } />
            ))
        }

    </>
    )
}
