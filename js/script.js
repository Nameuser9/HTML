    function dz1_task1(){
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
    function dz1_task2(){
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
    function dz1_task3(){
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
    function dz1_task4(){
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
    function dz1_task4_1(){
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

