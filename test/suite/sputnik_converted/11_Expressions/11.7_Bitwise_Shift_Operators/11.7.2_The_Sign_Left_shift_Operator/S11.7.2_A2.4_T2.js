// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.2_A2.4_T2;
 * @section: 11.7.2;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with "throw";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.2_A2.4_T2",

path: "11.7.2",

description: "Checking with \"throw\"",

test: function testcase() {
   //CHECK#1
var x = function () { throw "x"; };
var y = function () { throw "y"; };
try {
   x() >> y();
   $ERROR('#1.1: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() >> y() throw "x". Actual: ' + (x() >> y()));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: First expression is evaluated first, and then second expression');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() >> y() throw "x". Actual: ' + (e));
     }
   }
}

 }
});
