import React from 'react';

const FilterOptions = ({ handleFilter }) => {

    return (
        <th>
            <label htmlFor='filter'>FILTER BY:</label>
            <select id='filter' name='filter' defaultValue='none' onChange={(e) => handleFilter(e)}>
                <option value='none'>None</option>
                <optgroup label='Name'>
                    <option value='name_increase' >Increasing</option>
                    <option value='name_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Email'>
                    <option value='email_increase' >Increasing</option>
                    <option value='email_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Birthday'>
                    <option value='birthday_increase' >Increasing</option>
                    <option value='birthday_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Favorite Movie'>
                    <option value='favmovie_increase' >Increasing</option>
                    <option value='favmovie_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Favorite Food'>
                    <option value='favfood_increase' >Increasing</option>
                    <option value='favfood_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Favorite Color'>
                    <option value='favcolor_increase' >Increasing</option>
                    <option value='favcolor_decrease' >Decreasing</option>
                </optgroup>
                <optgroup label='Favorite Hobby'>
                    <option value='favhobby_increase' >Increasing</option>
                    <option value='favhobby_decrease' >Decreasing</option>
                </optgroup>
            </select>
        </th>
    );
}

export default FilterOptions;