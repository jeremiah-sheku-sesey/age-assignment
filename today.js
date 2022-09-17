//Function that can print my name 8 times using while loop;
function printMyNameFunc(name){
let counter=0;
let myName = name;
while(counter !=8){
    console.log(`Your name have been printed eight times: ${myName}`);
    counter++;
}

}
//calling the printMyNameFunc();
printMyNameFunc('Sheku_Jeremiah_Sesay');


//items in store (store management)
let storeItemsFunc=( )=>{
    let storeItems=['Rice', 'sugar', 'Bag', 'Beans', 'Shoe', 'Computer', 'Book', 'Pen'];
    let userInput=storeItems[5];

    if(userInput ==storeItems[0]){
        console.log(`${storeItems[0]} is SELECTED!`);
    }
    else if(userInput ==storeItems[1] ){
        console.log(`${storeItems[1]} is SELECTED!`);
    }
    else if(userInput ==storeItems[2]){
        console.log(`${storeItems[2]} is SELECTED!`);
    }
    else if(userInput ==storeItems[3]){
        console.log(`${storeItems[3]} is SELECTED!`);
    }
    else if(userInput ==storeItems[4]){
        console.log(`${storeItems[4]} is SELECTED!`);
    }
    else if(userInput ==storeItems[5]){
        console.log(`${storeItems[5]} is SELECTED!`);
    }
    else if(userInput ==storeItems[6]){
        console.log(`${storeItems[6]} is SELECTED!`);
    }
    else if(userInput ==storeItems[7]){
        console.log(`${storeItems[7]} is SELECTED!`);
    }
    else{
        console.log("Item is not Available in STORE!");
    }
}
//calling the storeItemsFunc();
storeItemsFunc();

//A function taht takes in two input, year of birth and current year and produce year of existence
let ageCalculator =()=>{
   let yearOfBirth = 1961;
   let currentYear =2022;

   let ageResult = currentYear - yearOfBirth;
   console.log(`Your are: ${ageResult} years old!`);
}
//calling the ageCalculator();
ageCalculator();