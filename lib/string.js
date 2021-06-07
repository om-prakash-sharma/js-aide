'use strict'

module.exports = () => {

    /**
    * 	this method help to check if array is empty or not 
    **/
    Object.defineProperty(String.prototype, 'isEmpty', {
        value: function () {
            const self = this;
            return self != null && self != undefined && self != "";
        },
        enumerable: false
    });
}