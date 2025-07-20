function greetUser(name){
    console.log("Hello," + name + "!");
}


greetUser(" Ali");
greetUser(" Sarah");




const greet = (greeting) =>{
    console.log("Say hi, " + greeting);
}




const square = (num)=>{


    return num * num;
    
}

console.log(square(5));



function heyBro(name){

    console.log(`Yo! ${name}  `);

}


heyBro("Sarah");



const yo = (name) => {
    console.log(`For! My Brother ${name}`);
}


yo("John Doe");




function max(num1, num2){
    if(num1 > num2){
        return num1;
    }

    else{
        return num2;
    }
}

console.log(max(2, 8));
console.log(max(4, 12));




const welcome = (name, age)=>{
    return(`Hi ${name} , you are ${age} years Old!`);

};


console.log(welcome("Ali" , 25));