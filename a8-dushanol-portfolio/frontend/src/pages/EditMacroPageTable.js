import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMacroPageTable = ({ macroToEdit }) => {

    const [meal, setMeal]         = useState(macroToEdit.meal);
    const [dateMeal, setDate]       = useState(macroToEdit.dateMeal);
    const [calories, setCalories] = useState(macroToEdit.calories);
    const [fat, setFat] = useState(macroToEdit.fat);
    const [protein, setProtein] = useState(macroToEdit.protein);
    const [fiber, setFiber] = useState(macroToEdit.fiber);
    const [sugar, setSugar] = useState(macroToEdit.sugar);
    
    const redirect = useNavigate();

    const editMacro = async () => {
        const response = await fetch(`/macros/${macroToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                meal: meal, 
                dateMeal: dateMeal, 
                calories: calories, 
                fat: fat,
                protein: protein,
                fiber: fiber,
                sugar: sugar
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Macros successfully edited in macros database.`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to edit this macro ${response.status}. ${errMessage.Error}`);
        }
        redirect("/macros");
    }

    return (
        <>
        <article>
            <h2>Edit a macro</h2>
            <p>On this page you can edit macros.</p>
            <table id="macros">
                <caption>Which meal are you editing?</caption>
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
                            onClick={editMacro}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditMacroPageTable;