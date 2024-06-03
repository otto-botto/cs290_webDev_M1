import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MacroList from '../components/MacroList';
import { Link } from 'react-router-dom';


function MacrosPage({ setMacro }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [macros, setMacros] = useState([]);

    // RETRIEVE the entire list of Macros
    const loadMacros = async () => {
        const response = await fetch('/macros');
        const macros = await response.json();
        setMacros(macros);
    } 
    

    // UPDATE a single macro
    const onEditMacro = async macro => {
        setMacro(macro);
         redirect("/edit");
    }


    // DELETE a single macro  
    const onDeleteMacro = async _id => {
        const response = await fetch(`/macros/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/macros');
            const macros = await getResponse.json();
            setMacros(macros);
        } else {
            console.error(`Unable to delete the macro = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the macros
    useEffect(() => {
        loadMacros();
    }, []);

    // DISPLAY the Macros
    return (
        <>
            <h2>List of Macros</h2>
            <p>This page shows the meals entered and their macros.</p>
            <Link to="/add">Add A Meal</Link>
            <MacroList 
                macros={macros} 
                onEdit={onEditMacro} 
                onDelete={onDeleteMacro} 
            />
        </>
    );
}

export default MacrosPage;