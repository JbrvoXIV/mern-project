import React from 'react';

const FilterOptions = ({ handleFilter, id }) => {

    return (
        <th>
            <label htmlFor='filter'>FILTER BY:</label>
            <select id='filter' name='filter' defaultValue='none' onChange={(e) => handleFilter(e, id)}>
                <option value='none'>None</option>
                <optgroup label='Name'>
                    <option value='name_ascending' >Ascending</option>
                    <option value='name_descending' >Descending</option>
                </optgroup>
                <optgroup label='Email'>
                    <option value='email_ascending' >Ascending</option>
                    <option value='email_descending' >Descending</option>
                </optgroup>
                <optgroup label='Birthday'>
                    <option value='birthday_ascending' >Ascending</option>
                    <option value='birthday_descending' >Descending</option>
                </optgroup>
                <optgroup label='Favorite Movie'>
                    <option value='favMovie_ascending' >Ascending</option>
                    <option value='favMovie_descending' >Descending</option>
                </optgroup>
                <optgroup label='Favorite Food'>
                    <option value='favFood_ascending' >Ascending</option>
                    <option value='favFood_descending' >Descending</option>
                </optgroup>
                <optgroup label='Favorite Color'>
                    <option value='favColor_ascending' >Ascending</option>
                    <option value='favColor_descending' >Descending</option>
                </optgroup>
                <optgroup label='Favorite Hobby'>
                    <option value='favHobby_ascending' >Ascending</option>
                    <option value='favHobby_descending' >Descending</option>
                </optgroup>
            </select>
        </th>
    );
}

export default FilterOptions;