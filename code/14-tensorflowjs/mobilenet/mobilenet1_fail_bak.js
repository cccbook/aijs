// Note: you do not need to import @tensorflow/tfjs here.
let mobilenet = require('@tensorflow-models/mobilenet')
// import * as mobilenet from '@tensorflow-models/mobilenet';

const img = document.getElementById('img');

// Load the model.
const model = await mobilenet.load();

// Classify the image.
const predictions = await model.classify(img);

console.log('Predictions: ');
console.log(predictions);