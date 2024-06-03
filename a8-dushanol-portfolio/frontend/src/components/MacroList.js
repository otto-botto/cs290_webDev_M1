import React from 'react';
import Macro from './Macro';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function MacroList({ macros, onDelete, onEdit }) {
    return (
        <table id="macros">
            <caption>Track Your Meals</caption>
            <thead>
                <tr>
                    <th>Meal</th>
                    <th>Date</th>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Protein</th>
                    <th>Fiber</th>
                    <th>Sugar</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {macros.map((macro, i) => 
                    <Macro 
                        macro={macro} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default MacroList;
