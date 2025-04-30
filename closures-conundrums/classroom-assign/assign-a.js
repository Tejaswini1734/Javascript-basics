function createUniqueCounter() {
    // Step 1: Private variable inside the function
    let count = 0;

    // Step 2: Return an object with two methods
    return {
        increment: function() {
            count += 1; // Increase the count by 1
            return count; // Return the new count
        },
        getValue: function() {
            return count; // Just return the current count
        }
    };
}

// Step 3: Create two independent counters
const counter1 = createUniqueCounter();
const counter2 = createUniqueCounter();

// Step 4: Use counter1
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2
console.log(counter1.getValue());   // Output: 2

// Step 5: Use counter2
console.log(counter2.increment()); // Output: 1 (it's separate from counter1)
console.log(counter2.getValue());   // Output: 1
