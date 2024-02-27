// function sum(a, b) {
//     return a + b;
// }

// function intro(){
//     console.log('hello world'); 
// }

// const sum1 = () => {}

// const intro1 = () => {
//     console.log("hello world in arrow function");
// }

// const arr1 = [1,2,3];

// console.log(sum(1,2));
// intro();
// intro1();
// console.log("sum in arrow function", sum1(2,3));


// //input: name: Son
// //output: Hello Son
// const introWithName = (name) => {
//     console.log("Hello", name);
// }
// introWithName("Son");



// const syncFunction = () => {
//     console.log("first");
//     console.log("first");
//     console.log("first");
// };

// const asyncFunction = () => {
//     console.log("first");
//     setTimeout(()=> console.log("second"),1000);
//     console.log("third");
// };

// syncFunction();
// asyncFunction();

// setTimeout(()=>{
//     console.log('an toi');
//     setTimeout(()=>{
//         console.log('rua bat');
//         setTimeout(()=>{
//             console.log('choi game');
//             setTimeout(()=> console.log("....."),1000);
//         });
//     },1000);
// },1000);



// const promise = new Promise((resolve, reject) => {
//     const isSuccessful = true;

//     if (isSuccessful) {
    
//     }else {
//         reject();
//         reject("some error!!!");
//     }
// });

// promise
// .then((data) => {
//     console.log('Xu li thanh cong', data);
// }) 
// .finally(()=> {

// });


// promise
// .then((data) => {
//     console.log(data);
//     console.log("rua bat");
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("da rua bat xong")
//         },1000)
//     });
// }) 
// .then((data) => {
//     console.log(data);
//     console.log("choi game");
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(".....");
//         },1000)
//     });
// })
// .catch((err) => console.log("error:", err))
// .finally(()=> console.log("finally"));



//async await
const eatingDinner = () => {
    console.log("an toi");
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("da an toi xong");
        }, 1000);
    });
}

const washingDishes = (data) => {
    console.log(data);
    console.log("rua bat");
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("da rua bat xong");
        },1000)
    });
});
