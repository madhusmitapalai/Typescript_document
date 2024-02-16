console.log('Hii typescript  I am Madhusmita')
// 1
// var num:number=15
// console.log('number',num)

// 2
// const sum : (a:number,b:number)=>number =(a,b)=>{
//     return a+b
// }
// console.log(sum(2,4))


// 3
// let isMyNameMadhu:boolean=true

// if(isMyNameMadhu==true){
// console.log('madhu name printed ,Hii madhu',)
// }else{
//     console.log('Opps')
// }

//4 bigint
// var maxNumber=BigInt('879872423648732')
// console.log('bigint',maxNumber)

//5 (any && unknown )
// var num2:any;
// num2=500
// num2=true
// num2='hii num2'

// console.log(num2)

// var num3:unknown;
// num3=1000
// num3='hii num3'
// num3=true

// if(typeof num3==='number'){
//     console.log(num3+1000)
// }else if(typeof num3==='boolean'){
//     console.log(num3)
// }

//function

// const  greet=(name:string ,age:number):any=>{
//     return console.log(`my name ${name}and my age is ${age}`)
// }
// greet('Madhusmita ',21)

//default param
const greet =(name:string = "ganesh", age:number)=> {
    return console.log(`my name ${name}and my age is ${age}`)
  };
  greet();
