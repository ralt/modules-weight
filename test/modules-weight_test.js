var modules_weight = require('../lib/modules-weight.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports[ 'weight' ] = {
    'basic workflow': function( test ) {
        test.expect( 2 );

        var list = modules_weight(),
            obj1 = { obj1: 1 },
            obj2 = { obj2: 2 };

        test.equal( list.set( obj1, 50 ), 1, 'length returned is correct' );

        list.set( obj2, 40 );

        test.equal( list.get()[ 0 ], obj2, 'first object is obj2' );

        test.done();
    }
};

