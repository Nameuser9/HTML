const dz1_task1 = function() {
    let num1 = prompt("введите число 1");
    let num2 = prompt("введите число 2");
    if (num1 <= 1){
        num1 = prompt("введите число 1 ещё раз");
    }
    if (num2 >= 3){
        num2 = prompt("введите число 2 ещё раз");
    }
    console.log(num1 , num2);
}
const dz1_task2 = function (){
        let test = true;
        function task2_1(test){
          return(test ? "+++" : "---");   
        }
        if (test == true){
            console.log(task2_1(true));
        }
        else{
            console.log(task2_1(false));
        }
    }
const dz1_task3 = function (){
        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    let day = randomNumber(1, 31);
    let count = 1;
        while (round(day) - 10 >= 0){
            count++;
        }
        console.log(day);
        console.log(count);
    }
const dz1_task4 = function (){
        let number = prompt();
        let limit = number.length-1;
        let count = 0;
        let result = new Array();
        const words = new Array("единиц","десятков","сотен","тысяч","десятков тысяч");
        while (count >= limit){
            result[count] = number % (10**(limit-(count+1)));
            console.log(result[count], words[count]);
            count++;
            
        }
    }
const dz1_task4_1 = function (){
        let number = prompt();
        let count = 0;
        let number2 = number.toString();
        console.log(number2.type);
        let result = new Array();
        result = number2.split("").reverse();
        const words = new Array("единиц","десятков","сотен","тысяч","десятков тысяч");
        while (count < result.length){
            console.log(result[count] , words[count]);
            count++;
        }
    }
const dz2_task1 = function (num_1){
        return(num_1**3);
    }
console.log(dz2_task1(2)+dz2_task1(3));
const dz2_task1_1 = num_1 => num_1**3;
console.log(dz2_task1_1(2)+dz2_task1_1(3));
const dz2_task2 = function(){
    let num_1 = prompt();
    if (Number.isInteger(num_1) == false){
        num_1 =prompt("ещё раз введите ЧИСЛО");
    }
    console.log (num_1 * 0.86 , "ваш доход после вычета налога");
    return (num_1 * 0.86);
    
}
const dz2_task3 = function(){
    let num_1 = prompt();
    let num_2 = prompt();
    let num_3 = prompt();
    if (num_1 > num_2){
        if (num_1 > num_3){
            console.log(num_1, " наибольшее число");
        }
        else {
            console.log(num_3, " наибольшее число");
        }
    }
    else{
        if (num_2 > num_3){
            console.log(num_2, " наибольшее число");
        }
        else {
            console.log(num_3, " наибольшее число");
        }
    }
}
const dz2_task4 = function(){
    const plus = (a , b)=>(a+b);
    const  minus = function(a,b){
        if (a >= b){
             return(a-b);
        }
        else{
            return(b-a);
        }
    }
    const milti = (a , b) => (a*b);
    const div = (a , b ) => (a/b); 
    
}
