// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let revert = [];
for (let letter in companyName){
    revert.unshift(companyName[letter]);
    //console.log(companyName[letter]);
};
//console.log(revert); //['d', 'n', 'a', 'l','i', 'a', 'h', 'T',' ', 'p', 'U', 'h','c', 'e', 'T']

for (let i=0; i < revert.length; i++){
    reversedCompanyName = revert[i];
    console.log(reversedCompanyName); //dnaliahT pUhceT
};