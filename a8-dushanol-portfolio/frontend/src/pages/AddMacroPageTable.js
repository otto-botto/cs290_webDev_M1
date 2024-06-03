import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddMacroPageTable = () => {
    const [meal, setMeal]         = useState('');
    const [dateMeal, setDate]       = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [fiber, setFiber] = useState('');
    const [sugar, setSugar] = useState('');
    
    const redirect = useNavigate();

    const addMacro = async () => {
        const newMacro = { meal, dateMeal, calories, fat, protein, fiber, sugar };
        const response = await fetch('/macros', {
            method: 'post',
            body: JSON.stringify(newMacro),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added new macro to database macros.`);
        } else {
            alert(`Unable to add new macro = ${response.status}`);
        }
        redirect("/macros");
    };


    return (
        <>
        <article>
            <h2>Add a meal</h2>
            <p>On this page you can add a meal and its macros.</p>
            
            <table id="macros">
                <caption>Which meal are you adding?</caption>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Date</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Fiber</th>
                        <th>Sugar</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="meal">Meal</label>
                        <input
                            type="String"
                            placeholder="Breakfast"
                            value={meal}
                            onChange={e => setMeal(e.target.value)} 
                            id="meal" />
                    </td>

                    <td><label for="date">Date</label>
                        <input
                            type="Date"
                            value={dateMeal}
                            placeholder={new Date().now}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td><label for="calories">Calories</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={calories}
                            onChange={e => setCalories(e.target.value)} 
                            id="calories" />
                    </td>

                    <td><label for="fat">Fat</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={fat}
                            onChange={e => setFat(e.target.value)} 
                            id="fat" />
                    </td>

                    <td><label for="protein">Protein</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={protein}
                            onChange={e => setProtein(e.target.value)} 
                            id="protein" />
                    </td>
                                     
                    <td><label for="fiber">Fiber</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={fiber}
                            onChange={e => setFiber(e.target.value)} 
                            id="fiber" />
                    </td>
                                     
                    <td><label for="sugar">Sugar</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={sugar}
                            onChange={e => setSugar(e.target.value)} 
                            id="sugar" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addMacro}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddMacroPageTable;