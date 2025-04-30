
for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}
/*
🔍 Explanation:
i = 0: Skipped (0 % 3 === 0) → continue

i = 1: Logged

i = 2: Logged

i = 3: Skipped (3 % 3 === 0)

i = 4: Logged

i = 5: Logged

i = 6: Skipped (6 % 3 === 0)

i = 7: Hits break, loop exits

🎯 Task 1: continue Statement
✅ Purpose:
The continue statement skips the rest of the current iteration and proceeds to the next one.

✅ Useful Example:
js
Copy
Edit
*/
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
/*
Output:

Copy
Edit
1
2
4
5
Use Case: Skipping unwanted values (e.g., skip invalid input, skip specific items).

🎯 Task 2: break Statement
✅ Purpose:
The break statement immediately exits the loop entirely, regardless of remaining iterations.

✅ Useful Example:
js
Copy
Edit
*/
for (let i = 1; i <= 5; i++) {
  if (i === 4) break;
  console.log(i);
}
/*
Output:

Copy
Edit
1
2
3
Use Case: Exit early when a condition is met (e.g., found the item, no need to continue).

🧪 Task 3: Custom for Loop
Code:
js
Copy
Edit
*/
for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0) continue;
  if (i > 15) break;
  console.log(i);
}
/*
🔮 Predicted Output:
kotlin
Copy
Edit
1
2
3
4
6
7
8
9
11
12
13
14
16 → break occurs before this, so not logged
Final Output:

Copy
Edit
1
2
3
4
6
7
8
9
11
12
13
14
⚔️ Task 4: Array Challenge
Input:
js
Copy
Edit
const arr = [10, 5, 8, 20, 3, 15, 25];
*/
for (const num of arr) {
  if (num > 12) {
    console.log("Found a large number!");
    break;
  }
  if (num === 5) {
    console.log("Skipping 5!");
    continue;
  }
  console.log(num);
}
/*
🔮 Predicted Execution:
10 → not >12 or 5 → logs 10

5 → logs "Skipping 5!" → skips

8 → logs 8

20 → >12 → logs "Found a large number!" → breaks loop

✅ Final Output:
pgsql
Copy
Edit
10
Skipping 5!
8
Found a large number!
🧠 Summary of Key Concepts:

Statement	What it does	Typical Use Case
continue	Skips to next iteration	Skip unwanted values
break	Immediately exits the loop	Stop when condition is met (e.g., found item)