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
const dz3_task1 = function(){
    let numbs = new Array ();
    let i = 0;
    
    const isOdd = function(a){
        if (a == 0){
            return(" - это ноль")
        }
        if (a%2 == 0 && a != 0){
            return(" - четное число")
        }
        if (a%2 == 1){
            return(" - нечетное число")
        }
    }
    while (i <= 11){
        numbs.push(i);
        console.log(numbs[i] , isOdd(numbs[i]));
        i++;
    }
    
}
const dz3_task2 = function(){
    let numbs = [1,2,3,4,5,6,7]
    numbs.splice(3,2)
    return(numbs)
}
const dz3_task3 = function(){
        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    let numbers = [randomNumber(0, 9), randomNumber(0, 9)
        ,randomNumber(0, 9),randomNumber(0, 9),randomNumber(0, 9)];
    let sumOfElements = 0;
    let i = 0;
    while (i < numbers.length){
        sumOfElements += numbers[i];
        i++;
    }
    function minNumber(array){
        let minNumber = 0;
        for(i = 0; i<= array.length-1; i++){
            if(array[i] < array[i+1]){
                minNumber = array[i];
            }
            else{
                minNumber = array[i+1];
            }
        }
        return(minNumber);
    }
    function isThere3(array){
        for(i = 0; i< array.length; i++){
            if (array[i] == 3){
                return("There`s a Three, index " , i)
            }
        }
        

    }
}
const dz3_task4 = function(){
    function makeX(count){
        let i = 0;
        let answer = ""
        while (i < count){
            answer+="X";
            i++;
        }
        return(answer);
    }
    for(i = 0; i<20; i++){
        console.log(makeX(i));
    }
}
const dz4_task1 = function(){
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
        }
    for (let [key,value] of Object.entries(numbers)){
        if (value>= 3){
        console.log(value)}
    }
}
const dz4_task2 = function(){
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
            comments: [
                {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                    rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                    },
                },
                {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                    rating: {
                    likes: 3,
                    dislikes: 1,
                    },
                },
            ],
        };
        console.log(post.author)
        console.log(post.comments[0].rating.dislikes)
        console.log(post.comments[1].userName)
        console.log(post.comments[1].text)
}
const dz4_task3 = function(){
    const products = [
            {
                id: 3,
                price: 200,
            },
            {
                id: 4,
                price: 900,
            },
            {
                id: 1,
                price: 1000,
            },
        ];
        products.forEach(function(products) { 
            products.price*=0.85;
            console.log(products);
            
        });
}

const dz4_task4 = function(){
const products = [
        {
        id: 3,
        price: 127,
            photos: [
            "1.jpg",
            "2.jpg",
            ],
            },
            {
        id: 5,
        price: 499,
        photos: [],
        },
        {
        id: 10,
        price: 26,
            photos: [
            "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
        ];
        let products_sorted = products.filter(function(item){
            if (item.photos != ""){
                if (item.photos != undefined){
                    return true;
                }
            }
        });
        
        products_sorted = products_sorted.sort(products_sorted.price)
        products_sorted2 = products.sort((x, y) => x.price - y.price);
        console.log(products_sorted)
        console.log(products_sorted2)
}

const dz4_task5 = function(){
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    let new_obj ={};
    en.map((item, index) => new_obj[item] = ru[index])
    console.log(new_obj)
}