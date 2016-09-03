/*  The purpose of this pattern is to pass reference of 'this' between functions
	so that you can invoke few functions in one statement like in jQuery */

var Calculator = function(number) {
    // pass reference to this by another variable if the caller of the function is not trusted
    var that = this;
    this.add = function(x) {
        number = number + x;
        return that;
    };

    this.multiply = function(x) {
        number = number * x;
        return that;
    };

    this.equals = function(callback) {
        callback(number);
        return that;
    };
};

new Calculator(0).add(20).multiply(-7).add(5).equals(function(result) {
    console.log(result);
});
