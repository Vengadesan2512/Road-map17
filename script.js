const log=(param)=>console.log(param);
log("working")

// Promise
//  - What is a promise?
//  - Promise States
//  - Promise chain
//  - promise.all()
//  - Use of fetch() & then(
//     let task =90;
//     let placement=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (task>=80){resolve("your placement is proccess");}else{
//                 reject("please complete your task above 80")
//             }
            
//         }, 2000);
//     })
//     placement.then((result)=>log(result))
//     .catch((result)=>log(result));

//     //chaning of promise
//     let chainPromise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(15);
//         },3000)
//     })
// chainPromise.then((data)=>{
//     log(data);return data* 2;
// })
// .then((data2)=>{
//     log(data2) ;return data2*5
// })
// .then((data3)=>{
//     log(data3)
// })

//normal function in promises
function getName(name){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (name.length ==0){
            reject("please enter the valid name");}else{
                resolve(name)
            }
        
    },2000);
})
}
function getAge(name){
    setTimeout(()=>{
        log(`you entered age as ${name}`)
    },2000)
}
function displayDetails(name,age){
    setTimeout(()=>{
        log(`Hi ${name} we got your age as ${age} `)
    },2000)
}
getName("vengadesan")
.then((data)=>{
    log("Your name is",data);
    return data;
})
.then((name)=>{
    getAge(25);
    return name;
})
//functionality1
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise1 is called")
        resolve(25)
    },1000)
})
//finctionality2
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise2 is called")
        resolve(50)
    },2000)
})
//finctionality
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise3 is called")
        resolve(75)
    },3000)
})
Promise.all([promise1,promise2,promise3])
.then((value)=>{
    log("promise value",value);
})
.catch((err)=>{
    log("error:",err)
});

//fetch data
fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{log(data);
    data.forEach((element)=>{
const countryobject={...element,
    name:element.name.common,
    flags:element.flags.png,
    population:element.population,
    region:element.region,
    capital:element.capital,
}
createcountryCard(countryobject);
    })
   
})
.catch((err)=>log("error:",err))

function createcountryCard(element){
    document.body.innerHTML +=`
    <div class="container">
        <img src="${element.flags}" alt src="${element.name}"/>
        <div class="information">
        <h2>${element.name}</h2>
            <p> <span> population:${element.population} </span> </p>
            <p> <span> Region:${element.region} </span> </p>
            <p> <span> Capital:${element.region} </span> </p>
            <button class="btn-fun">Get Whether<button/>
        </div>
    </div>
    `;
}