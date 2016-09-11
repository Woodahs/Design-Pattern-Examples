/*  The purpose of this pattern is to have a possibility to listen to chenges
    on property and react to it's change if necessary
    - using ES5 defineProperty method */

var Phone = function(name, price) {
    var priceChangingCallbacks = [],
        priceChangedCallbacks = [];

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(val) {
            name = val;
        }
    });

    Object.defineProperty(this, 'price', {
        get: function() {
            return price;
        },
        set: function(val) {
            var i;
            if (val && price !== val) {
                for (i = 0; i < priceChangingCallbacks.length; i++) {
                    // if one of the callbacks returns false, then do not change the phone's price
                    if (!priceChangingCallbacks[i](this, val)) {
                        return price;
                    }
                }

                price = val;

                for (i = priceChangedCallbacks.length - 1; i >= 0; i--) {
                    priceChangedCallbacks[i](this);
                }
            }
        }
    });

    this.onPriceChanging = function(callback) {
        priceChangingCallbacks.push(callback);
    };

    this.onPriceChanged = function(callback) {
        priceChangedCallbacks.push(callback);
    };
};

var phone = new Phone('Phone One', 417.99);

console.log('The name is: ' + phone.name);

console.log('The price is: ' + phone.price);

phone.onPriceChanging(function(b, price) {
    if (price > 500 || price < 300) {
        console.log('System error, price has gone unexpectedly high');
        return false;
    }
    return true;
});

phone.onPriceChanged(function(b) {
    console.log('The phone price has changed to: ' + b.price);
});

phone.price = 349.99;

phone.price = 700;

console.log("Phone price is: " + phone.price);
