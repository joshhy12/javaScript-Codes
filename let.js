/*
The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
*/


<html>
<body>

<h2>Redeclaring a Variable Using let</h2>

<p id="demo"></p>

<script>
let x = 10;
// Here x is 10

{  
let y = 2; 
// Here y is 2
}

// Here x is 10
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

</html>
