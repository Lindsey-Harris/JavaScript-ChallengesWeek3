// Write a function that will allow you to calculate how many slices of pizza x each 
// person y would get if they shared evenly. The function should return an 
// interpolated string like Each person gets 4.00 slices of pizza; from our 8 slice 
// pizza x being a decimal in case there is no way to split the pizza evenly.



function cutpizzaSlices(slices, people) {
    return (`Each person gets ${slices / people} slices of pizza`);
}
  
  console.log(cutpizzaSlices(8, 2));
  console.log(cutpizzaSlices(8, 3));
  