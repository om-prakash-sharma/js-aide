'use strict'

module.exports = () => {

    /**
    * 	this method help to check if array is empty or not 
    **/
    Object.defineProperty(Array.prototype, 'isEmpty', {
        value: function () {
            const self = this;
            return self && Array.isArray(self) && self.length;
        },
        enumerable: false
    });
};