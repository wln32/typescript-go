//// [tests/cases/compiler/collisionThisExpressionAndLocalVarInMethod.ts] ////

//// [collisionThisExpressionAndLocalVarInMethod.ts]
class a {
    method1() {
        return {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        }
    }
    method2() {
        var _this = 2;
        return {
            doStuff: (callback) => () => {
                return callback(this);
            }
        }
    }
}

//// [collisionThisExpressionAndLocalVarInMethod.js]
class a {
    method1() {
        return {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        };
    }
    method2() {
        var _this = 2;
        return {
            doStuff: (callback) => () => {
                return callback(this);
            }
        };
    }
}
