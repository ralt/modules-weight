/**
 * @file
 * Main file of the modules-weight module.
 */

'use strict';

// The base object.
var weight = {};

// Array of modules.
weight.modules = [];

/**
 * Sets a module with its weight.
 *
 * @param module object
 *   The module to store.
 * @param weight number
 *   The weight to assign to it.
 * @return number
 *   The new number of modules stored.
 */
weight.set = function( module, weight ) {
    return this.modules.push( {
        module: module,
        weight: weight
    });
};

/**
 * Gets the sorted arrays of modules.
 *
 * @return array
 *   Sorted array of modules.
 */
weight.get = function() {
    // Sort the array by the weights.
    this.modules.sort( compare );

    // Return a new array with only the modules.
    return this.modules.map( function( module ) {
        return module.module;
    });
};

/**
 * The compare function used by the sort call.
 *
 * @param obj1 object
 *   First object to compare.
 * @param obj2 object
 *   Second object to compare.
 */
function compare( obj1, obj2 ) {
    return obj1.weight - obj2.weight;
}

module.exports = function() {
    return Object.create( weight );
};

