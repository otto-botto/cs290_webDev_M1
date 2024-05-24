// Models for the Macros Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to mongoDB server.' });
    } else  {
        console.log('Success: Connected to mongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const macroSchema = mongoose.Schema({
    dateMeal:   {type: Date, required: true, default: Date.now()},   
	meal:       { type: String, required: true },
	calories:   { type: Number, required: true },
    fat:        { type: Number, required: true },
    protein:    { type: Number, required: true },
    fiber:      { type: Number, required: true },
    sugar:      { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "macros".
const macros = mongoose.model('Macro', macroSchema);


// CREATE model *****************************************
const createMacro = async (dateMeal, meal, calories, fat, protein, fiber, sugar) => {
    const macro = new macros({ 
        dateMeal: dateMeal,
        meal: meal, 
        calories: calories, 
        fat: fat,
        protein: protein, 
        fiber: fiber, 
        sugar: sugar 
    });
    return macro.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveMacro = async () => {
    const query = macros.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMacroByID = async (_id) => {
    const query = macros.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMacroById = async (_id) => {
    const result = await macros.deleteOne({_id: _id});
    return result.deletedCount;
};




// UPDATE model *****************************************************
const updateMacro = async (_id, dateMeal, meal, calories, fat, protein, fiber, sugar) => {
    const result = await macros.replaceOne({_id: _id }, {

        dateMeal: dateMeal,
        meal: meal, 
        calories: calories, 
        fat: fat,
        protein: protein, 
        fiber: fiber, 
        sugar: sugar 
    });
    return { 
        _id: _id, 
        dateMeal: dateMeal,
        meal: meal, 
        calories: calories, 
        fat: fat,
        protein: protein, 
        fiber: fiber, 
        sugar: sugar 
    }
}

// EXPORT the variables for use in the controller file.
export { createMacro, retrieveMacro, retrieveMacroByID, updateMacro, deleteMacroById }