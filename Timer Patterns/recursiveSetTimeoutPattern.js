/*  The purpose of this pattern is to make sure that delayed actions are executed
    in sequence. If we used the setInterval then if one of the tasks took longer
    than interval then we would have our sequence broken 
    - main point here is to define function in setTimeout and use reference to
    it inside our function again */

setTimeout(function getData() {
    console.log("Retrieving data!");
    setTimeout(getData, 5000);
}, 5000);
