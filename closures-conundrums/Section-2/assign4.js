const myObject = {
    z: 1,     // string key
    a: 2,     // string key
    10: 3,    // numeric string key
    b: 4,     // string key
    2: 5,     // numeric string key
    c: 6      // string key
  };
  for (const key in myObject) {
    console.log(key, myObject[key]);
  }
/*
 1. Why are the properties not logged in the order they were defined?
Reason:
JavaScript objects internally treat all keys as strings, even if they appear to be numbers. However, "numeric string keys" (like "10" or "2") are treated differently in terms of iteration order.

Key rules:

Numeric keys are sorted in ascending numeric order during iteration.

Non-numeric keys retain their insertion order (as of ES2015).

Numeric keys: "2" and "10"

They appear first, in numeric order: 2, 10

Other keys (z, a, b, c) follow in the order they were added.

🔁 2. Behavior of for...in loop
The for...in loop iterates:

All enumerable properties (including inherited ones).

First, numeric string keys, in ascending numeric order.

Then, other string keys, in insertion order.

In our case:
*/

for (const key in myObject) {
  console.log(key, myObject[key]);
}
/*Output:

css
Copy
Edit
2 5
10 3
z 1
a 2
b 4
c 6
So:
✅ Numeric string keys come first (sorted: 2, 10)
✅ Then regular keys: z, a, b, c (in insertion order)

🧾 3. Behavior of Object.keys()
Object.keys(myObject) returns an array of own enumerable property keys. The order:

Numeric string keys (sorted numerically)

Then, string keys (in insertion order)

Output:

js
Copy
Edit
console.log(Object.keys(myObject));
// [ '2', '10', 'z', 'a', 'b', 'c' ]
This matches the order seen in the for...in loop here, though Object.keys() does not include inherited properties, unlike for...in.

🧪 4. Experiment: Custom Object with Mixed Keys
Try this code:

js
Copy
Edit
const testObj = {
  b: 'string',
  20: 'num',
  a: 'string2',
  3: 'num2',
  z: 'string3'
};

for (const key in testObj) {
  console.log(key, testObj[key]);
}

console.log("Object.keys:", Object.keys(testObj));
Expected Output:

javascript
Copy
Edit
3 'num2'
20 'num'
b 'string'
a 'string2'
z 'string3'
Object.keys: [ '3', '20', 'b', 'a', 'z' ]
✅ Numeric string keys: 3, 20 → sorted numerically
✅ Then: b, a, z → in insertion order

🧠 Conclusion: Key Takeaways
All object keys are strings internally.

Numeric string keys are sorted numerically and come first.

Non-numeric string keys are listed in insertion order (ES2015+).

for...in includes inherited properties, Object.keys() does not.

Never rely on object key order unless you control it (use Map or arrays if order matters).