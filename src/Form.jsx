import React from 'react';
import { useState } from 'react';

const Form = ({name, age, handleNameChange,handleAgeChange,handleSubmit}) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input type="text" name="name" value={name} onChange={handleNameChange}/>
                <br/>
                <label htmlFor="age"> Age: </label>
                <input type="number" name="age" value={age} onChange={handleAgeChange}/>
                <br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Form;
