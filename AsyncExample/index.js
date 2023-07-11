// console.log("task1");
// console.log("task2");
// console.log("task3");

//op
//
// task1
// task2
// task3

// here comes the twist of async
console.log("task1");

setTimeout(() => {
    console.log("task2");
}, 2000);

console.log("task3");


// the task1 and task3 completes on time and does not wait for task2
//task2 takes his time and completes its task
//o/p
//task1
//task3
//task2


//drawback of asynchronus 
// let a = 10;

// let b = 0;

// setTimeout(() => {
//     let b = 20;
// }, 2000);

// console.log(a + b);

// it will give the output as 10 because console log executed first when the value of b was 0,
//it does not wait for the other task which is updating the value of b