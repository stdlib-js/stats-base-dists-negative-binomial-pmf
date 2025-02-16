/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution probability mass function (PMF).
*
* @module @stdlib/stats-base-dists-negative-binomial-pmf
*
* @example
* var pmf = require( '@stdlib/stats-base-dists-negative-binomial-pmf' );
*
* var y = pmf( 5.0, 20.0, 0.8 );
* // returns ~0.157
*
* y = pmf( 21.0, 20.0, 0.5 );
* // returns ~0.06
*
* y = pmf( 5.0, 10.0, 0.4 );
* // returns ~0.016
*
* y = pmf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* y = pmf( 21.0, 15.5, 0.5 );
* // returns ~0.037
*
* y = pmf( 5.0, 7.4, 0.4 );
* // returns ~0.051
*
* var mypmf = pmf.factory( 10, 0.5 );
* y = mypmf( 3.0 );
* // returns ~0.027
*
* y = mypmf( 5.0 );
* // returns ~0.061
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
