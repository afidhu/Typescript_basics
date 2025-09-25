// export {}
// class App{
//     test(){
//         console.warn('hellow')
//     }
// }
// let a =new App();
// a.test();
//////////////TYPES/////////
// let a:number =10;
// var n:String ='10';
// var b:boolean =true;
// console.log(a);
// console.log(n);
// console.log(b);
///////////ARRAY//////
// var user1:any[] =['juma', 'asha', 'kaka']; //This stall any data type
// let user:String[] =['juma', 'asha', 'kaka'];///this variable user, store list of string
// var user2:[String, String] =['juma', 'asha']; //this variable user2, store list of 2 strings
// var user3:[String, number] =['juma', 4]; //this variable user2, store list of 2 strings, and number
// user[0]='hasan';
// user.push('2')
// user1.push(1)
// user3.push(100,120)
// console.log(user)
// console.log(user1)
// console.log(user3)
/////TYPED OBJECT////
// interface=> means decleare datatype of keys in object
// interface userType {
//     name:string,
//     age:number
//     email:string
//     isEuro :boolean
//     adrees:any
// }
// var user:userType ={
//     name:'juma',
//     age:20,
//     email:'juma@gmail.com',
//     isEuro:true,
//     // adrees:'aa.dd.333'
//     adrees:302
// }
// user.name='asha'
// console.log(user)
/////////////////////////Bellow without define that interface , i put any means it store any data(value) type at key
// var user1:any ={
//     name:'juma',
//     age:20,
//     email:'juma@gmail.com',
//     isEuro:'ok',
//     adrees:1000
// }
// console.log(user1)
//////////UNION TYPES//////////////
// "|"=> means Single variable can store one data type or another
// var data:number|String =22
// var data2:number|String ='ASHA'
// var data3:number|String|boolean =true
// var data4:any =false;
// console.log(data)
// console.log(data2)
// console.log(data3)
// console.log(data4)
/////// INTERFACE/////
//=>This is template of variable by define datatype
// interface studentsType{
//     name:String
//     age:number,
//     email:String
//     isEuro:boolean
//     adrees:null
// }
// var students:studentsType ={
//     name:'juma',
//     age:20,
//     email:'juma@gmail.com',
//     isEuro:true,
//     adrees:null
// }
// console.info(students)
/////////FUNCTION///////
//=>this means this function return number
// var x =(a:number,b?:number):number=>{
//     return a+(b? b:100)
// }
// console.log(x(33))
///////////CLASSESS///
// class App{
//     getName():string{
//         return 'name'
//     }
// }
// let a =new App()
// console.log(a.getName())
///////////////NAMESPACE////////
// namespace userList{
//   export  class Users{
//         getName(){
//             return 'hello'
//         }
//     }
// }
// var a =new userList.Users()
// console.log(a.getName())
////////////MODULES///////
// const a =()=>{
//     return 'hellow a'
// }
//  const b =()=>{
//     return 'hellow b'
// }
// export  default {a,b}
// export const c = ()=>{
//     return 'hellowc'
// }
////////////GENERICS////////
//=>Is like any in interface, but differ
// var users=<T>(name:T)=>{
//     return name;
// }
// console.log(users(3))
/////////////ENUM/////
//=>THis is collection of value
// enum Days{
//     a,
//     b,
//     c,
//     d
// }
// var myday:Days
// myday=Days.d
// console.log(myday)
//////////SYMBOLS/////////////////
// let s1 =Symbol();
// console.log(s1)
