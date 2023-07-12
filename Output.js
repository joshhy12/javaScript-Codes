/*
JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

// 1)Using InnerHTML 
//Changing the innerHTML property of an HTML element is a common way to display data in HTML.
//demo is my attribute name so i can cange wherever i want
document.getElementById("demo").innerHTML = 10 + 6;

// 2)Using document.write()
//The document.write() method should only be used for testing.
document.write(9 + 6);
//<button type="button" onclick="document.write(5 + 6)">Try it</button>
//This is not recomended because it kill all the html data and also is used for TEST ONLY 

// 3) Using window.alert()
alert(1 + 6);
//You can skip the window keyword.
//In JavaScript, the window object is the global scope object, that means that variables, properties, 
//and methods by default belong to the window object. This also means that specifying the window keyword is optional:

// 4) Using console.log()
//For debugging purposes, you can call the console.log() method in the browser to display data.\
// control+shift+I 
console.log(5 + 6);


//JavaScript Print
//JavaScript does not have any print object or print methods.
//You cannot access output devices from JavaScript.
//The only exception is that you can call the window.print() method in the browser to print the content of the current window.
//<h2>The window.print() Method</h2>
//<p>Click the button to print the current page.</p>
//<button onclick="window.print()">Print this page</button>