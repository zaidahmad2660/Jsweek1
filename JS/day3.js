// const a=[1,2,3,4,5,6,7,8]
// const b=a.slice(2,5)
// console.log("the resultant array is:",b)

// const b=a.splice(2,0,"str",'apple')
// console.log("the update array is:",b)
// console.log("the original array is:",a)


//object
// const a={name:"fahad",
//         age:28,
//         city:"isb",
//         str:{g:"no",m:"yes"},
//         fun:function(){
//             return "the is me " +this.name +" from " + this.city
//         }
// }


// console.log("the obj is:",a.fun())




// PRACTCE OF OBJ

// const obj ={name:"zaid",
//     age:20,
//     str:{g:"w11",az:"yes"},
//     fun:function(){
//         return "this is " +this.name+"my age is"+this.age+" i m from isb";
//     }
// }
// // console.log("the result of object is",obj.str["g"]="no");
// console.log("the result of object is",obj.fun());


// PRACTICE OF FUNCTIONS
// const a=[1,2,3,4,5,6,7]
// const b= a.slice(1,4);
// console.log(b);

// const b= a.splice(0,3,2)
// console.log(b);
// console.log(a);


// map

// let a=[23,34,21]
// let b = a.map((value,index,array)=>{
// console.log(value,index,array)
// return value+1

// })
// console.log(b);


// to get object entries,values,key
// const obj={
//     name:"zaid",
//     age:22,

// }
// console.log(Object.entries(obj));
// const arr=[ [ 'name', 'zaid' ], [ 'age', 22 ] ];
// console.log(arr[1][1])


// filter function
// let a=[4,2,1,4,5,3,8]
// let b = a.filter((value)=>{
// return value>5
// }
// )
// console.log(b);


// reduce method
// let a=[4,2,1,4,5,3,8]
// let b=a.reduce((h1,h2)=>{
// return h1+h2;
// })
// console.log(b);




// //destructuring
// const obj={name:"me", age:30, city:"isb"}
// const {name, ...x}=obj;
// // console.log(x)
// const a=[1,3,4,5,6]
// const [ins1,...inst2]=a
// // console.log(inst2)

// function sum([name,age,...city]){
//      console.log(city)
// }
// sum(a)

// const obj ={
//     name:"zaid",
//     age: 22,
//     city:"isb"
// }

// const {name, ...x}=obj
// console.log(x);

const arr = [1,2,3,4,5,6]
// const [abc1, ...x]=arr
// console.log(x);

function name([nam,qwe, ...city]) {
    console.log(...city);
    
}
name(arr)