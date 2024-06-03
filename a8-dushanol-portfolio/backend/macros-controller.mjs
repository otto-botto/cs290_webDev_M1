// Controllers for the Macros Collection

import 'dotenv/config';
import express from 'express';
import * as macros from './macros-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/macros', (req,res) => { 
    macros.createMacro(
        req.body.meal, 
        req.body.dateMeal,
        req.body.calories,
        req.body.fat,
        req.body.protein,
        req.body.fiber,
        req.body.sugar 
        )
        .then(macro => {
            console.log(`"${macro.meal}" was added to the collection.`);
            res.status(201).json(macro);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request - unable to create this macro.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/macros', (req, res) => {
    macros.retrieveMacro()
        .then(macro => { 
            if (macro !== null) {
                console.log(`All macros were retrieved from the collection.`);
                res.json(macro);
            } else {
                res.status(404).json({ Error: 'Unable to retrieve because this macro does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request - please check the endpoint and/or the parameters.' });
        });
});


// RETRIEVE by ID controller
app.get('/macros/:_id', (req, res) => {
    macros.retrieveMacroByID(req.params._id)
    .then(macro => { 
        if (macro !== null) {
            console.log(`"${macro.meal}" was retrieved, based on its ID.`);
            res.json(macro);
        } else {
            res.status(404).json({ Error: 'Unable to retrieve because a macro with this id does not exist.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request - please check the id.' });
    });

});


// UPDATE controller ************************************
app.put('/macros/:_id', (req, res) => {
    macros.updateMacro(
        req.params._id,
        req.body.meal, 
        req.body.dateMeal,
        req.body.calories,
        req.body.fat,
        req.body.protein,
        req.body.fiber,
        req.body.sugar 
    )
    .then(macro => {
        console.log(`"${macro.meal}" was updated.`);
        res.json(macro);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request - unable to update the amacro, please check the endpoint and/or parameters.' });
    });
});


// DELETE Controller ******************************
app.delete('/macros/:_id', (req, res) => {
    macros.deleteMacroById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} the macro was deleted.`);
                res.status(200).send({ Success: 'The macro has been successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Unable to delete - a macro with such an id does nto exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete macro.' });
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
