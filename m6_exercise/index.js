const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const someShapes = require('./shapes.js').shapes;

// Define a function to pass in the form input name for the shape. 
// If it exists, then return that array/row from the shape object,
// for use when the function is called:
function CompareShapeData(choice) {
  for (const oneItem of someShapes) {
      if (oneItem.item === choice) {
          return oneItem;
      }
  }
}

// Define a route to handle the 
// choice form input
// using a comparison function:
app.post('/chosen', (req, res) => {
  // Define a variable to access the user's choice, 
  // based on the comparison function:
  const chosen = CompareShapeData(req.body.choice);

  // Use the new variable to access the 
  // item, color, and size parameters:
  res.send(`
    <h2>Confirmation</h2>
    <p>You chose the ${chosen.item},  
       which has the color ${chosen.color}  
       and is size ${chosen.size}.
    </p>
    `)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});