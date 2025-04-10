import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [value, setValue] = useState('');

    const onChangeValue = ( { target } ) => {
        setValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( value.trim().length <= 1) return;

        onNewCategory( value.trim() );
        setValue(' ');
        // setCategories( categories => [ value, ...categories ] );
        
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
            type='text'
            placeholder="buscar gif"
            onChange={ onChangeValue }
            value={ value }
        />
    </form>
  )
}
