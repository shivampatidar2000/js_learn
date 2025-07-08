const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "shivam", email: 'shivampatidar@example.com'})
    },1000)
})
promiseThird.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "Test", email: 'test@example.com', password: "12345"})
        }else{
            reject('ERROR: somting want worng')
        }
    },1000)
})

// promiseFour.then().catch()
 // collback hell
promiseFour.then(function(user){
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(()=>{console.log("The Promise is either resolved or rejected")})


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName: "Rahul", email: 'rahul@example.com', password: "232123"})
        }else{
            reject('ERROR: Js five want wrong')
        } 
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
} // it is wait some time and run

consumePromiseFive()


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch (error) {
//         console.log("E", error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    for(let i= 0; i< data.length; i++){
        console.log(data[i].name)
    }
    // console.log(typeof data);
}).catch((error)=>{
    console.log(error);
})