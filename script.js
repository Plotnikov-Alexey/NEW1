"use strict"
// alert( 'Привет, хуир!' );
// let message;
// message = "рожа";
// alert(message);
// let admin,
//     name;
// name = "Диман";
// admin = name;
// alert(admin);
// let test1 = prompt("укажи значение1");
// // let test2 = prompt("укажи значение2");
// alert (test1);
// // alert (test2);jj
// alert (typeof test1);
// test1 = Boolean(test1);
// alert (test1);
// alert (typeof test1);
// alert (typeof test2);mm
// alert (`значение ${test1}`);
// alert (`значение ${"test1"}`);
// test1 = Number(test1);
// test2 = Number(test2);
// alert (test1);
// alert (test2);
// alert (typeof test1);
// alert (typeof test2);
// test3=test1+test2;
// alert (typeof test3);
// alert (test3);
// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK
// alert (typeof2 isBoss);
// alert (typeof test1);
// test1 = String(test1);
// alert (typeof test1);
//alert(" 3 j " - 2);
// alert( Boolean(0) ); // true
// let nameJS = prompt ("Какое официальное название носит javascript?");
// if (nameJS == "ECMAScript")  { alert("Верно"); }
//     else {alert("Не знаете? ECMAScript");};
// let nameJS2 = prompt ("Какое официальное название носит javascript?");
//     (nameJS2 == "ECMAScript") ?  alert("Верно") : alert("Не знаете? ECMAScript");
// let value = +prompt("Введите число");
// alert(typeof value);
// alert(value);
// if (value>0) {alert("1");}
// else if (value<0) {alert("-1");}
// else {alert("0");}
// let a = +prompt("Введите число a");
// let b = +prompt("Введите число b");
// let result=(a+b<4) ? alert("Мало") : alert("Много")
// let login = prompt("Введите число a");
// let message = (login == 'Сотрудник') ? "Привет":
//               (login == 'Директор') ? "Здравствуйте":
//               (login == '') ? "Нет логина":
//               "";
// alert(message)              ;
// let a = 0;
// let b = 66;
// let c = false;
// let d = true;
// let f = "false";
// let g = "true";
// let h = "gfgrgr";
// let r = "";
// alert(typeof a);
// alert(typeof b);
// let i = c||h;
// alert(typeof i);
// alert(i);
// let x;
// let f=false;
// f || (x = 1);
// alert(x); // undefined, потому что (x = 1) не вычисляется
// let age=15;
// if (!(age>=14 && age<=90)) {alert(age)};

// let answer = prompt("Кто там?");
// if (answer == null) {alert("Отменено");}
//    else if (answer == "Админ")
//            { let passw = prompt("Пароль?");
//              // let rpassw = (passw == null) ? "Отменено" :
//           d   //              (passw == "Я главный") ? "Здравствуйте!" :
//              //              "Неверный пароль";
//              (passw == null)        && alert("Отменено");
//              (passw == "Я главный") && alert("Здравствуйте!");
//              !(passw == null) && !(passw == "Я главный") && alert("Неверный пароль");}
//              //alert(rpassw);}
//     else  {alert("Я не знаю");};
// let i =1
// alert(i--)
// alert(i)
// for(let i=2;i<11;i++)rr
// { if (i % 2==0)
// //   {alert(`${i}`)} };
// let i =0;
// while (i<3) {alert(`number ${i}`); i=++i}
// let value=0;
// while (value<100){value = prompt("Всунь число");
// if (value==null) break;
// value = +value;
// if (value!==value) {value=0};
// };
// let value = +prompt("Введите число");
// lable: for (let i=2; i<=value; i++)
//        {
//          for (let j=2; j<i; j++) {if (i%j == 0) continue lable;};
//          alert(i);
//        }

// if (n>2)
//   { alert('2');
//     for (let i = 3; i <= n; i++)
//           {  for (let j = 2; j <= i-1; j++)
//               {  //alert(`J=${j}`);
//                  if (i % j == 0) break;
//                  if (j == i-1) {alert(i)};
//               }
//            }
//    }
//
// let browser = prompt("?");
// if (browser=="Edge") {alert("You`ve got the Edge!")}
// else if ((browser=="Chrome")||(browser=="Opera")){alert("Okay")}
// else alert("keq");
// const number = +prompt("Введите число между 0 и 3","");
// switch(number) {
// case 0 :
// alert("Вы ввели 0");
// break;
// case 1 :
// alert("Вы ввели чило 1");
// break;
// case 2 :
// case 3 :
// alert ("2 or 3");
// }
// function checkAge(age) {
//   (age > 18) ? return true : return confirm('Родители разрешили?');
//   if (age > 18) ||
// function min (a, b) {
//   let a = +prompt("Введите а");
//   let b = +prompt("Введите b");
//   //return (a>b) ? alert(a) : alert (b);
//   return
// };
// min (a, b);

// function pow() { x = +prompt("Введите x"); n = +prompt("Введите n"); return
// alert(x**n) }; let x; let n; pow(x,n); let sayHi = function() { alert(
// "Привет" ); }; //alert( sayHi ); //let  age = prompt("Сколько лет?");
// function checkAge() { let  age = prompt("Сколько лет?"); //return (age > 18)
// ? true: false;//1 вариант return (age > 18) || false;//второй вариант };
// //checkAge(); //alert(checkAge()); let  age = prompt("Сколько лет?"); // let
// checkAge = ()=> (age > 18) || false alert(checkAge()); dddd //let checkAge =
// ()
//let checkAge = (age)=>

/*let user={};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

/*function isEmpty(obj){
  //let obj = {};
  let key;
  for(key in obj){
  //  alert(key);
  };
  return (key===undefined) ? true:
                            false;
}
let schedule = {dd:2};
alert( isEmpty(schedule) );*/

/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
//let sum = salaries.John + salaries.Pete + salaries.Ann;
let sum;
  for(let key in salaries){
    sum += salaries[key];
  }
alert(sum);*/
//if (typeof obj[key] === Number) {alert (obj[key])}

/*function multiplyNumeric(obj) {
  for (let key in obj){
   if (typeof obj[key] === "number") {alert(obj[key]*2)}
  }
};
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);*/

// let user = {dom:1,
//             obj:{rt1:2}};
// let clone ={};
// clone.dom = user.dom;
//
// clone.obj.rt1 = user.obj.rt1;
// // for(let keyu in user){alert(keyu);
//                       alert(user[keyu]);}
// let clone ={};
// let pod_clone ={};
//
// for(let key in user ){
//       if (typeof user[key] === "object")
//          {
//           for(let key2 in user[key]) {
//            // {alert(key);
//            //  alert(user[key]);
//            //alert(key2)
//             // clone[key] = user[key];
//              pod_clone[key2] = key[key2];
//              //clone[key] = user[pod_clone];
//              }
//          }
//      else
//          {clone[key] = user[key];}
//   };
// //for(let keys in clone){
// // alert(keys);
// // alert(clone[keys]);
// //};
// clone.dom++;
// clone.obj.rt1++;
// alert (user.dom);
// alert (user.obj.rt1);
// alert (clone.dom);
// alert (user.obj.rt1);s
// let b;
// b = Boolean(alert("d"));
// alert (b);
//alert( alert(1) && alert(2) );
//alert ("a">"c");
                                   //Повторение
// let name = prompt("Какое официальное название Javascript?");
// if (name == "hui") {alert ("Верно")}
// else {alert ("неправильно")};

// let name = prompt("Какое официальное название Javascript?");
// (name == "hui")? alert ("Верно"):
//                  alert ("неправильно");

// let value = +prompt("Введите число");
// if (value > 0){alert("1")}
// else if  (value < 0){alert("-1")}
// else {alert("0")};

// let result = (a + b < 4)?"Мало":
// "Vyjuj"

//if (age<=14 && age>=90)

// let name = prompt("Кто там?");
// if (name === null || name == "") {alert("Отменено");}
// else if (name !== "Admin") {alert("Я вас не знаю");}
// else  {
//        let password = prompt("Пароль?");
//        if (password === null || password == "") {alert("Отменено")}
//        else if (password !== "i") {alert("Неверный пароль")}
//        else {alert("Здравствуйте!")}
//      };

// for(let i = 2; i < 11; ++i){
//   if (i % 2 == 0) {alert(i)}
// };

// let i =0;
// while(i<3){
//   alert(i)
//   i++;
// }

// let value=0;
// while (+value <= 100 && value != null){
//   value = prompt("Введите число больше 100");
// };

// let value = +prompt("Введите сисло");
// lable:
// for(let i=2; i<=value; i++ ) {
//     for (let n = 2; n < i; n++){
//     if (i % n == 0){continue lable}
//     };
//     alert(i);
// };

// function checkAge(age) {
//   1// if (age > 18) {
//   //   return true;
//   // } else {
//   //   return confirm('Родители разрешили?');
//   // }
//   2//return ((age > 18)||confirm('Родители разрешили?'));
//   3// return  ((age > 18) ? true:
//   //                      confirm('Родители разрешили?'));
// }
// let age = prompt('Сколько вам лет?', 18);
// alert(checkAge(age));

// function min(a, b){
//   if (a > b){
//     alert(b)
//   }
//   else {alert(a)}
// }
// let a = prompt("Введи а");
// let b = prompt("Введи b");
// min(a, b);
//1ИЛИ
//  function min(a, b){
//    if (a > b){
//      return b
//    }
//    else {return a}
//  }
// let a = prompt("Введи а");
// let b = prompt("Введи b");
// alert(min(a, b));

// function pow(x,n){
//   return (x**n);
// };
// let x;
// do{x = +prompt("Введи x")}
// while(x < 1) ;
// console.log(x);
// let n = +prompt("Введи n");
// console.log(n);
// alert( pow(x,n) );

//alert(+"+49");

// let user = {};
// user.name = "John";
// user["urname"] = "Smith";
// user.name = "Pete";
// for (let key in user){
//   alert(key);
//   alert(user[key])
// }

// let schedule = {};
// function isEmpty(schedule){
//   let key;
//   for (key in schedule){};
//   return (key === undefined)? true:
//                               false;
// }
// alert (isEmpty(schedule));


// function call_zp(salaries){
//   let summ = 0;
//   for (let key in salaries){
//     summ = summ + salaries[key]
//   };
//   return summ;
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// alert(call_zp(salaries));

             //Добавить свойства
// let archive = {};
// let qwestion;
// let name;
// let obj_name;
// do {
//   qwestion = confirm("Добавить пользователя?");
//   if (qwestion == true){
//     name = prompt("Добавь имя");
//     do{obj_name = prompt("Добавь сумму")}
//     while(+obj_name !== +obj_name || obj_name == null || obj_name == "");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     archive[name] = obj_name;
//   }
// } while (qwestion == true);
//
// for (let key in archive){
//    alert(key);
//    alert(archive[key])
//  }

// function multiplyNumeric(obj){
//   for (let key in obj){
// //    alert(typeof obj[key]);
//     if(typeof(obj[key]) === "number"){ obj[key] *= 2};
//   }
// };
// let menu = {
//   width: 200,
//   height: 700,
//   title: "My menu"
// };
// // for (let key in menu){
// //   alert(key);
// //   alert(menu[key])
// // };
// multiplyNumeric(menu);
// for (let key in menu){
//   alert(key);
//   alert(menu[key]);
// }

//alert( 0.2.toFixed(20) ); // 0.10000000000000000555
let y = 6.35;//6.3499


//alert( y.toFixed(20) );
// y = y*100;//634.99
// y = Math.round(y);//635
// y = y/10;//63.5
// y = Math.round(y);//64
// y = y/10
// = +y.toFixed(1);
alert( (y*10).toFixed(20) );
