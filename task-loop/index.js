

// TASK1              1-den 100-e qeder olan ededlerin cemini tapin

// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   sum += i;
// }
// console.log(sum);



// TASK2             Verilmiş array: [1, 2, 3, 4, 5] – bu array-dəki bütün ədədləri konsola yazdırın.for in

// let numbers = [1,2,3,4,5];

// let result = "";
// for (let number in numbers) {
//     result +=  numbers[number]+ " ";
// }
// console.log(result);


// TASK3             Verilmiş obyekt: {ad: 'Ali', yaş: 25, şəhər: 'Bakı'} – bu obyektin bütün açarlarını konsola yazdırın.

// let person = {ad: 'Ali', yaş: 25, şəhər: 'Baki'};

// let result = "";

// for (let item in person) {
//     result += item + " ";
// }
// console.log(result);

// TASK4             Verilmiş obyekt: {kitab: '1984', müəllif: 'George Orwell'} – açar və dəyərləri konsola yazdırın.for of

// let person = {kitab: '1984', müəllif: 'George Orwell'};

// let result = "";

// for (let item in person) {
//     result += item + " : " + person[item] + " , ";
// }
// console.log(result);

// TASK5             Verilmiş array: ['alma', 'armud', 'banan'] – bütün meyvələri konsola yazdırın.

// let meyveler = ['alma', 'armud', 'banan'] ;

// for (const meyve of meyveler) {
//     console.log(meyve);
// }

// TASK6             Verilmiş string: 'Salam' – hər bir hərfi konsola yazdırın.while

// let soz = 'Salam';
// for (let i = 0; i < soz.length; i++) {
//     console.log(soz[i]);
    
// }


// TASK7             1-dən 10-a qədər olan ədədləri konsola yazdırın.

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// TASK8             Verilmiş array: [5, 10, 15, 20] – array boşalana qədər elementləri konsola yazdırın.do while

let numbers = [5, 10, 15, 20];
let number = 0;
do {
    console.log(numbers[number]);
    number++;

} while (number < numbers.length);

// TASK9             1-dən 5-ə qədər ədədləri do while ilə konsola yazdırın.
// let start = 1;
// do {
//     console.log(start);
//     start++;
    
// } while (start<= 5);

// TASK10             Verilmiş şərt: istifadəçi ədəd daxil edir və ədəd 50-dən kiçikdirsə döngü davam edir.


    // while (true) {
    //     let eded = prompt("eded daxil edin");   
    //     if (eded>50) {
    //         break;
    //     }
        
    // }
    







