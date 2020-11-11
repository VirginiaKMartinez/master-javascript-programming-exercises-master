function getProperty(car, model) {
  // your code here
  return car[model];
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output);