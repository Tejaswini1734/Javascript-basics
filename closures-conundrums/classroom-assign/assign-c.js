function filterObjectProperties(obj, minLength) {
    const result = {}; // New object to store filtered properties

    for (let key in obj) {
        const value = obj[key];

        // Check if value is a string AND has enough length
        if (typeof value === "string" && value.length >= minLength) {
            result[key] = value; // Add to result object
        }
    }

    return result;
}

// Test the function
const data = { 
    a: "short", 
    b: "longer string", 
    c: 123, 
    d: "very long string indeed" 
};

const filtered = filterObjectProperties(data, 6);
console.log(filtered);


