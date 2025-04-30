function delayedGreeter(names) {
    for (var i = 0;names.length;i++) {
    setTimeout(function() {
    console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
    }
    }
    delayedGreeter(['Alice','Bob','Charlie']);


/*
Objective:
Understand how JavaScript handles variable scoping and closures inside asynchronous functions like setTimeout.

🔍 Problem Summary:
The initial code used a for loop with var to iterate over an array of names. Inside the loop, it called setTimeout to greet each name after a delay.

However, all greetings printed Hello, undefined! — not the expected names.

🧠 Root Cause:
var is function-scoped, so there’s only one i for all loop iterations.

setTimeout runs after the loop ends, so i becomes 3.

Accessing names[3] gives undefined.

This shows a common mistake: closures in asynchronous code don’t always work the way we expect.

✅ Solutions Used:
IIFE (Immediately Invoked Function Expression):
Creates a new scope for each iteration, capturing the correct value of i.

let instead of var:
let is block-scoped, so each iteration has its own unique i, solving the problem cleanly.

💡 Key Learnings:
Closures remember variables, not values — which causes bugs in async loops if not handled carefully.

Use let for block scoping in loops — it's modern and cleaner.

Understand how and when setTimeout functions are executed (after the loop ends).

IIFEs are a manual but effective way to create scope and preserve variable values.


*/ 
