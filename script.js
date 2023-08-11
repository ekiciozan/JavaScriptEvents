// var name;
// name = "2";
// alert(name);
// console.log(name);
// var isAlive = function(){
//     return alert("test");
// }

//#################Template Literals
// const  fullName = 'Ozan Ekici';
// const yearOfBirth = 1996;

// let val = `Benim adım ${fullName}`;
// console.log(val);

//#################Object Literals
// let val;
// let person = {
//     firstName : 'Mustafa',
//     lastName : 'Test',
//     hobbies : ['music','football'],
//     adres:{
//         city:'Bursa',
//         country:'TR'

//     },
//     getBirthYear: function(){
//     return 1996;
//     }
// }
// val = person.firstName;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.adres;
// val = person.adres.city;
// val = person.getBirthYear();

// let people = [
//     {
//         firstName:'Ozan',
//         lastName:'Ekici'
//     },
//     {
//         firstName:'Ceren',
//         lastName:'Ekici'
//     }
// ]
// console.log(people);

//#################function expression
// const sum = function sum(a,b){
//     if (typeof a ===  'undefined'){a=0;}
//     if (typeof b ===  'undefined'){b=0;}
//     var c = a + b;
//     return c;
// }
// console.log(sum(10));

//#################window object

//## alert('msSQL');
//## prompt: input almak için
//var c =  prompt('bir sayi giriniz');
//console.log(c);
//## confirm:confirm mesajı ile ilerlemek itendiğinde.
// var d = confirm('emin misiniz ?');
// if (d== true)
// console.log('tamam a basıldı');
// else
// console.log('iptal e basıldı');

//#################location
// var val ;
// val = window.location;
// console.log(val);
// val = window.location.host;
// console.log(val);
// val = window.location.href;
// console.log(val);
// val = window.location.hostname;
// console.log(val);

//#################DOM
// let val;
// val = window.document;
// val = window.document.body;
// val = window.document.images;
// val = window.document.URL;
// val = window.document.forms;
// val = window.document.head;
// val = window.document.forms[0].id;
// console.log(val);

//#################Single Element seçme

let val;
//  val = document.getElementById('header');
// val = document.getElementById('fname').className;
// val.style.fontSize = "45px";
 // val.style.color = 'red';
//innerText innerHTML ,:başlığı değiştirmeye yarıyor.
// val.innerText  = 'Test123 Başlık';
/* val.innerHTML  = '<i>Test123 Başlık</i>';
console.log(val);*/

//#################Alternatif özellik document.querySelector()
// # işareti id için, . ise class seçimi
// val = document.querySelector('#header');
// birden fazla aynı class varsa ilkini döndürür.
//val = document.querySelector('.col-75');
//val = document.querySelector('li:nth-child(3)').textContent ='content değişti';
//console.log(val);

//#################Multiple Elements
// val= document.getElementsByClassName('col-25');
// for (let i = 0; i<val.length; i++)
// {
//     console.log(val[i]);
// }

// val= document.getElementsByTagName('div');
// for (let i = 0; i<val.length; i++)
//  {
//      console.log(val[i]);
//  }

//  val= document.querySelectorAll('.row');
//  console.log(typeof val);

//  val.forEach(function(item){
//     console.log(item);
//  });
//  for (let i = 0; i<val.length; i++)
//   {
//       console.log(val[i]);
//   }

//#################Element Oluşturma

// const li = document.createElement('li');
// li.className = 'list-group list-group-item-secodnary';
// li.setAttribute('title','text title');
// //node ekleme
// const text = document.createTextNode('6');
// li.appendChild(text);
// //li altına bir eleman ekleme

// const a = document.createElement('a');
// a.className = 'delete-item float-right';
// a.innerHTML = "<i class = 'fas fa-times'></i>"
// li.appendChild(a);
// console.log(li);

//#################Element Silme

// let list = document.querySelector('#task-list');
// list.children[0].remove();
// console.log(list);

//#################Attribute Silme
// list.children[0].remoceAttribute('class');

//#################Event Listener

// const btn =  document.querySelector('#subBTN');

// function btnClick(e){
//     console.log('butona tıklandı');
//     e.preventDefault();
// }
// //sayfanın refreshi olmamsı için ahrefteki hrefi yok saymak için prevent kullanıldı.
// btn.addEventListener('click',btnClick);
// console.log(btn);

//testtt2


//#################Event Listener Mouse Events

//  const btn = document.querySelector('#subBTN');
//  const division = document.querySelector('#subject');
//  const header = document.querySelector('#header');

// //click
// btn.addEventListener('click',mouseCatch);
// //doubleclick
// division.addEventListener('dblclick',mouseCatch);
// //mouse down
// division.addEventListener('mousedown',mouseCatch);
// //mouseup
// division.addEventListener('mouseup',mouseCatch);
// //mouse enter
// division.addEventListener('mouseenter',mouseCatch);
// //mouse leave
// division.addEventListener('mouseleave',mouseCatch);
// //mouse over
// division.addEventListener('mouseover',mouseCatch);
// //mouse out
// division.addEventListener('mouseout',mouseCatch);
// // out ve leave arasındaki farkı. Out Kendi altındaki elemanlarda 
// // gerçekleşir leave gerçekleşmez. leave için tamamen farklı bir dive geçmek gerek.


//mouse move
// division.addEventListener('mousemove',mouseCatch);
// // mouseun sürekli hareket ettiğini yakalamak için kullanılır.
// division.addEventListener('mousemove',mouseCatch);
// function mouseCatch(e){
    
//     header.textContent = `Mouse X: ${e.offsetX}
//     Mouse Y: ${e.offsetY}` 
//     console.log(`event type: ${e.type}`);
//     e.preventDefault();
// }

//#################Keyboard Events
//const inputName = document.querySelector('#fname');
//keydown,keyup
// inputName.addEventListener('keydown',keyCatch);
// inputName.addEventListener('keyup',keyCatch);

// inputName.addEventListener('keypress',keyCatch);
// inputName.addEventListener('focus',keyCatch);
// inputName.addEventListener('blur',keyCatch2);
//focus oldugunda mavi olcak cıktıgında beyaz
// function keyCatch(e)
// {
//     // console.log(`Keyboard Event Type: ${e.type}`);
//     // console.log(`Key Code: ${e.keyCode}`);
//     console.log(`Value: ${e.target.value}`);
//     e.target.style.backgroundColor = 'blue';
// }

// function keyCatch2(e)
// {
  
//     e.target.style.backgroundColor = 'white';
// }