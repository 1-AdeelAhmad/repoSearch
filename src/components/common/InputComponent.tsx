import React, { useEffect, useState } from 'react';
import { InputComponentProps } from '../../types/components';

const InputComponent = ({ handleSearchQuery, label }: InputComponentProps) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (inputValue: string) => {
        setValue(inputValue);
        handleSearchQuery(inputValue);
    };

    //  Little check here so that we can always return the default search value
    useEffect(() => {
        if (!value) {
            handleSearchQuery('is:public');
        }
    }, [value]);

    return (
        <div
            data-testid='repoSearchInputComponent'
            className='relative border border-gray-300 rounded-md py-3 shadow-sm focus-within:ring-1 w-full px-3'
        >
            <label
                htmlFor={label}
                className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900 capitalize'
            >
                {label}
            </label>
            <input
                data-testid='repoSearchInput'
                type='text'
                name='name'
                id='name'
                className='block w-full border-0 p-1 text-gray-900 placeholder-gray-500 sm:text-sm'
                placeholder='Enter Repo Name'
                onChange={(e) => handleChange(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default InputComponent;
