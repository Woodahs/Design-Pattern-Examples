/*  The purpose of this pattern is to use an argument object in our function
    if you want to handle different number of arguments passed into that function */

function sumUp() {
    var y = 0;
    for (var i = 0; i < arguments.length; i++) {
        y += arguments[i];
    }
    return y;
}

sumUp(3, 20, 7, -2);
sumUp(2, -2);
sumUp(10, 28, 20);
