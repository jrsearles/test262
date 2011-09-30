/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


ES5Harness.registerTest({

    id: "15.4.4.20-9-b-7",

    path: "TestCases/chapter15/15.4/15.4.4/15.4.4.20/15.4.4.20-9-b-7.js",

    description: "Array.prototype.filter - properties can be added to prototype after current position are visited on an Array",

    test: function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
        }
        var arr = [0, , 2];

        try {
            Object.defineProperty(arr, "0", {
                get: function () {
                    Object.defineProperty(Array.prototype, "1", {
                        get: function () {
                            return 6.99;
                        },
                        configurable: true
                    });
                    return 0;
                },
                configurable: true
            });

            var newArr = arr.filter(callbackfn);

            return newArr.length === 3 && newArr[1] === 6.99;
        } finally {
            delete Array.prototype[1];
        }
    },

    precondition: function prereq() {
        return fnExists(Array.prototype.filter) && fnExists(Object.defineProperty) && ![, 1].hasOwnProperty(0) && fnSupportsArrayIndexGettersOnArrays();
    }

});