// // let a = 6;

// // if (a > 9) {
// //   console.log('yes');
// // } else {
// //   console.log('else');
// // }

// // let button = document.querySelector('button');
// // let input = document.querySelector('.age');

// // console.log(0 && 2);


// // console.log(false || '' || 0 || 123);


// // button.onclick = function () {
// //   let num = +input.value;
// //   if (num >= 16 && num <= 60) {
// //     console.log('welcom');
// //   } else if (num > 60) {
// //     console.log('you are here?');
// //   } else {
// //     console.log('don`t go!!!');
// //   }
// // }

// // button.onclick = function () {
// //   let num = +input.value;
// //   if (0 && num) {
// //     console.log("yes");
// //   } else {
// //     console.log('no');
// //   }
// // }

// // console.log(1 && " " && 'uined' && 132)


// // || - search first true або вертає останнє значення

// // && - search first false або вертає останнє значення

// //if працює тіки з тру
// // console.log(2 && 'trio' && 23 && 'ret' && '' && 1);

// // 0 - false

// // ''  - false

// // undefined- false

// // null - false


// // let num = 15;

// // switch (num) {
// //   case 15:
// //     console.log('one more year');
// //     break;

// //   case 16:
// //     console.log('123');
// //     break;
// // }


// // let hour = 12;
// // let minute = 30;

// // if (hour == 12 && minute == 30) {
// //   console.log( 'The time is 12:30' );
// // }



// let button = document.querySelector('.btn');
// let input = document.querySelector('.customInput');
// let conntent = document.querySelector('.inputValue');

// let baton2 = document.querySelector('.btnData');
// let input2 = document.querySelector('.webInput');

// baton2.addEventListener('click', onChange2);

// function onChange2() {
//   if (input2.value) {
//     input.value = input2.value
//   } else {
//     alert('close!!!!!!!!')
//   }
// }



// function onChange() {
//   if (input.value) {
//     conntent.innerHTML = input.value
//   } else {
//     alert('close!!!')
//   }
// }



// button.addEventListener('click', onChange);





// // '' - false
// //   0 - false
// //   1 - true
// //   null - false
// //   undefined - false
// //   ' ' - true
// //   -1 - true
// //   {} - true
// //   [] - true



// let button = document.querySelector('.go');
// let inputLogin = document.querySelector('.logInInput');
// let inputPass = document.querySelector('.passInput');
// let error = document.querySelector('.error');

// button.addEventListener('click', logIn);

// function logIn() {
//   if (inputLogin.value && inputPass.value) {
//     console.log('logIn');
//     inputLogin.value = '';
//     inputPass.value = '';
//     error.innerHTML = '';
//   } else if (!inputLogin.value || !inputPass.value) {
//     if (!inputLogin.value && !inputPass.value){
//       return error.innerHTML = 'press logg & pass';
//     }
//     if (!inputLogin.value) {
//       error.innerHTML = 'logIn empty'
//     } else {
//       error.innerHTML = 'password empty'
//     }
//   }
// }


// if (1 === 1) {
//   console.log('1');
// } else if (1 === 1) {
//   console.log('2');
// } else {
//   console.log('false');
// }





// let input = document.querySelector('.logInInput');
// let button = document.querySelector('.go');


  // if ('ECMAScript' === input.value) {
  //   alert('«Верно!»');
  // } else  {
  //   alert('«Не знаете? ECMAScript!»');
  // }

// console.log(1 + 1 && (2 || 3))
// [] - true массив
// {} - false обєкт
// let obj = {};

console.log(Array.isArray(obj));

let test = null;
let test2
console.log(test2);

// 1 - String;
// 2 - Number;
// 3 - null;
// 4 - undefined;
// 5 - object(obj{обєкт} / mass[массив]);
// 6 - boolean (true "false");
// typeof - оператор для ідентинфікації типу данних.
if(1 < 0) {
  console.log('yes')
} else if(1 > 0){
  console.log('yesss')
} else {
  console.log('no')
}

console.log(-1 < 0)

let test3 = 1;


switch(test3) {
  case 'red':
    console.log(test3);
    break;
  case 2:
    console.log(test3);
    break;
  case 5:
    console.log(test3);
    break;
  default:
    console.log(false);
}


let input = document.querySelector('.inputtt')
let b1 = document.querySelector('.button')
let value;
let out = document.querySelector('.out1')
console.log(out)
// b1.onclick = f1;
b1.addEventListener('click', f1)

function f1() {
  value = input.value;
  if(value == 4) {
    out.innerHTML = 'true'
  } else {
    out.innerHTML = 'false'
  }
}





