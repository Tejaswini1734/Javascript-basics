function processObjectsDelayed(objects, delay) {
    objects.forEach(obj => {
        setTimeout(() => {
            obj.process(); // this is safe because we're calling it as obj.process()
        }, delay);
    });
}

// Sample array
const items = [
    { 
        name: "Alpha", 
        process: function() { 
            console.log(`Processing: ${this.name}`); 
        } 
    },
    { 
        name: "Beta", 
        process: function() { 
            console.log(`Task for ${this.name} done.`); 
        } 
    }
];

// Use the function
processObjectsDelayed(items, 1000); // Will log both after 1 second
