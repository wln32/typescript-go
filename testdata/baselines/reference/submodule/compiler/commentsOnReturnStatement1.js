//// [tests/cases/compiler/commentsOnReturnStatement1.ts] ////

//// [commentsOnReturnStatement1.ts]
class DebugClass {
    public static debugFunc() {
        // Start Debugger Test Code
        var i = 0;

        // End Debugger Test Code
        return true;
    }
}

//// [commentsOnReturnStatement1.js]
class DebugClass {
    static debugFunc() {
        // Start Debugger Test Code
        var i = 0;
        // End Debugger Test Code
        return true;
    }
}
