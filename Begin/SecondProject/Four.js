const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p_con = document.createElement('p');
p_con.style.cssText = "color: red;";
p_con.textContent = "Hey I'm red";
container.appendChild(p_con);

const h3_con = document.createElement('h3');
h3_con.style.cssText = "color: blue;";
h3_con.textContent = "I'm a blue h3";
container.appendChild(h3_con);



const div_con = document.createElement('div');
div_con.setAttribute('style', 'background-color: pink ; border: 2px solid black');

const div_new = document.createElement('h1');
div_new.textContent = "I'm in a div";
const p_new = document.createElement('p');
p_new.textContent = 'ME TOO';

div_con.appendChild(p_new);
div_con.insertBefore(div_new, p_new);
container.appendChild(div_con);

//////////////////////////
// This is for button event testing
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3'); 
btn3.addEventListener('click', () => {
    alert("Hello World");
});

const btn4 = document.querySelector('#btn4'); 
btn4.addEventListener('click', function (e) {
    console.log(e);
});

const btn5 = document.querySelector('#btn5'); 
btn5.addEventListener('click', function (e) {
    console.log(e.target);
});

const btn6 = document.querySelector('#btn6'); 
btn6.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach(button => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

////////////////////
// bubbling, capture and propagation
// normally by clicking on div3 it will click through and capture
// body -> div1 -> div2 -> div3 
// and then the event will by trigger upward by div3 -> div2 -> div1 -> body // this is call bubbling
function logtext(e){
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling 
}

const divs = document.querySelectorAll('.tet');
divs.forEach(div => div.addEventListener('click', logtext, {
    // capture: true // this will trigger by capture, default is false so it bubbling up
    // once: true    // trigger once and it will remove the event, useful for checkout
}));



///////////////////////
// test about object
const empty = {}; // create empty object
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    console.log('Hi! I\'m ' + this.name[0] + '.');
  }
};

person.nation = 'England'; // add an attribute
delete person.gender; // delete an attribute
// many way to access an attribute
console.log(person.age);
console.table(person.name);
console.log(person.name[1]);
console.log(person.bio());
console.log(person['interests']);
// way to see if an attribute in object
console.log('age' in person);
/* loop
for(key in person){
  console.log(person[key]);
}*/

// test: palindromes
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^A-Za-z]/g, ""); //replace anything than a-z, A-Z out of string
  return (
    processedString
      .split("")                    //// ["h", "e", "l", "l", "o"]
      .reverse()                    //// ["o", "l", "l", "e", "h"]
      .join("") == processedString  //// "olleh"
  );
};

console.log(palindromes('hello'));
console.log(palindromes('yahay'));


console.log("search for filter, map, sort, reduce; some, every, find, findIndex");
// filter array
// map array
// sort array
// reduce used to calculate sum
// some find if exist, and every find if all sastify the condition
// find return object while findIndex return index of array
