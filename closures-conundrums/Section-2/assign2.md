🧩 Original Code (with var) Recap:
javascript
Copy
Edit
console.log(mysteryVariable);         // undefined
mysteryVariable = 10;
console.log(mysteryVariable);         // 10

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // undefined
  var mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable); // 20
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);    // 10
🔁 Rewritten Code with let:
javascript
Copy
Edit
console.log(mysteryVariable); // ❌ ReferenceError
let mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // ❌ ReferenceError (due to TDZ)
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);
📌 Predicted Output:
pgsql
Copy
Edit
❌ ReferenceError: Cannot access 'mysteryVariable' before initialization
The first console.log(mysteryVariable) throws a ReferenceError.

JavaScript sees that mysteryVariable is declared using let, and puts it in the Temporal Dead Zone (TDZ).

Any access before the actual declaration is not allowed, even though it's hoisted.

🧠 Part 2: Explanation of Hoisting
🚀 What Is Hoisting?
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope (before code execution). However, only declarations are hoisted — not initializations.

⚖️ Key Differences Between var, let, and const:

Feature	var	let / const
Scope	Function-scoped	Block-scoped
Hoisted?	Yes (initialized as undefined)	Yes (but not initialized)
Temporal Dead Zone (TDZ)	❌ No TDZ – accessible before declaration (as undefined)	✅ TDZ – accessing before declaration throws ReferenceError
Redeclaration	✅ Allowed	❌ Not allowed in same scope
🔍 Example Summary:
With var, accessing a variable before declaration gives undefined due to hoisting.

With let/const, accessing before declaration results in a ReferenceError because of the TDZ.

Inside functions, a var variable is scoped to the entire function and hoisted — this can shadow global variables without errors, but can be confusing.

let and const provide safer, predictable behavior, making it easier to manage scope.

✅ Conclusion:
Switching to let or const improves code safety, avoiding silent bugs caused by var hoisting.

The ReferenceError when using let shows that JavaScript is protecting you from accessing variables too early — a key reason modern JavaScript prefers let/const over var.

