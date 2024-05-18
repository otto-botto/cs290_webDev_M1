'use strict';

// Define an object with arrays of shapes, colors, and sizes.
const shapes = [
    { item: 'square',    color: 'red',     size: 2 },
    { item: 'circle',    color: 'orange',  size: 2 },
    { item: 'triangle',  color: 'yellow',  size: 4 },
    { item: 'rectangle', color: 'green',   size: 5 },
    { item: 'hexagon',   color: 'purple',  size: 9 }
];

// Allow exporting of the object to other functions:
module.exports.shapes = shapes;
