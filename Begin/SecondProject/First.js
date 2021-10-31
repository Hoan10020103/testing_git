const div = document.createElement('div');

// parentNode.appendChild(childNode) appends childNode as the last child of parentNode
// parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode
// parentNode.removeChild(child) removes child from parentNode on the DOM and returns reference to child

const div = document.createElement('div');                     
// create a new div referenced in the variable 'div'

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules

///////////////////////////////////
div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the divs background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white" // ok in a string

//////////////////////
div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute

//////////////////////////
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

///////////////////////////////
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>';                   
// renders the html inside div