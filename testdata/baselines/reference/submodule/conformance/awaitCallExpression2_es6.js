//// [tests/cases/conformance/async/es6/awaitCallExpression/awaitCallExpression2_es6.ts] ////

//// [awaitCallExpression2_es6.ts]
declare var a: boolean;
declare var p: Promise<boolean>;
declare function fn(arg0: boolean, arg1: boolean, arg2: boolean): void;
declare var o: { fn(arg0: boolean, arg1: boolean, arg2: boolean): void; };
declare var pfn: Promise<{ (arg0: boolean, arg1: boolean, arg2: boolean): void; }>;
declare var po: Promise<{ fn(arg0: boolean, arg1: boolean, arg2: boolean): void; }>;
declare function before(): void;
declare function after(): void;
async function func(): Promise<void> {
    before();
    var b = fn(await p, a, a);
    after();
}

//// [awaitCallExpression2_es6.js]
async function func() {
    before();
    var b = fn(await p, a, a);
    after();
}
