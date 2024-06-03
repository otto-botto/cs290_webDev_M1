import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { PiTrashDuotone} from 'react-icons/pi';
import { CiEdit} from 'react-icons/ci';


function Macro({ macro, onEdit, onDelete }) {
    return (
        <tr>
            <td>{macro.meal}</td>
            <td>{macro.dateMeal}</td>
            <td>{macro.calories}</td>
            <td>{macro.protein}</td>
            <td>{macro.fat}</td>
            <td>{macro.fiber}</td>
            <td>{macro.sugar}</td>

            {/* Update these icons to something that matches your style. */}
            <td><PiTrashDuotone onClick={() => onDelete(macro._id)} /></td>
            <td><CiEdit onClick={() => onEdit(macro)} /></td>
        </tr>
    );
}

export default Macro;