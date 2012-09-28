modules-weight
===

Provides a way to store modules associated with a weight and get them sorted.

Instructions
---

Installation:

    npm install modules-weight

Tests:

    npm test

Usage
---

The module itself is a function that will return a new storage object. So the
first thing to do is call this function.

    var weight = require( 'modules-weight' );

    var modulesList = weight();

To add a module to the list, the `set()` method is provided. It accepts two
arguments: a module and a weight.

    modulesList.set( module /* object */, weight /* number */ );

Once you've added several modules with their weight, getting them in a sorted
order is as simple as:

    modulesList.get();

The `get()` method returns an array of modules sorted by their weight.

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

Copyright (c) 2012 Florian Margaine
Licensed under the MIT license.

