// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property SQRT2 of the Math Object has the attribute DontEnum
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.8_SQRT2/S15.8.1.8_A2.js
 * @description Checking if Math.SQRT2 property has the attribute DontEnum
 */

// CHECK#1
for(x in Math) {
  if(x === "SQRT2") {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="SQRT2"}\'');
  }
}

