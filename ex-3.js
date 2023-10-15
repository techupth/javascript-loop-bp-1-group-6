// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
for (let i=0; i < numbers.length; i++){
    //console.log(numbers[i]); //check value in array;
    if (numbers[i+1] >= numbers[i]){
        minNumber = numbers[i];
        //console.log("This is min number "+ minNumber);
    }
}
console.log(minNumber); //3