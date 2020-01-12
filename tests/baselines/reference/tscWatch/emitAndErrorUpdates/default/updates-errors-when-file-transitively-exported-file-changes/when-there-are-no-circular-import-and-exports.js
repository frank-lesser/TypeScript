/a/lib/tsc.js --w
//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title: string;
}

//// [/user/username/projects/myproject/lib1/tools/public.ts]
export * from "./tools.interface";

//// [/user/username/projects/myproject/app.ts]
import { Data } from "lib2/public";
export class App {
    public constructor() {
        new Data().test();
    }
}

//// [/user/username/projects/myproject/lib2/public.ts]
export * from "./data";

//// [/user/username/projects/myproject/lib1/public.ts]
export * from "./tools/public";

//// [/user/username/projects/myproject/lib2/data.ts]
import { ITest } from "lib1/public";
export class Data {
    public test() {
        const result: ITest = {
            title: "title"
        }
        return result;
    }
}

//// [/user/username/projects/myproject/tsconfig.json]
{"files":["app.ts"],"compilerOptions":{"baseUrl":"."}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/lib1/tools/public.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/lib1/public.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/lib2/data.js]
"use strict";
exports.__esModule = true;
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.test = function () {
        var result = {
            title: "title"
        };
        return result;
    };
    return Data;
}());
exports.Data = Data;


//// [/user/username/projects/myproject/lib2/public.js]
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./data"));


//// [/user/username/projects/myproject/app.js]
"use strict";
exports.__esModule = true;
var public_1 = require("lib2/public");
var App = /** @class */ (function () {
    function App() {
        new public_1.Data().test();
    }
    return App;
}());
exports.App = App;



Output::
>> Screen clear
12:00:37 AM - Starting compilation in watch mode...



12:00:50 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/app.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib2/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib2/data.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/tools/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Rename property title to title2 of interface ITest

//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title2: string;
}

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents

Output::
>> Screen clear
12:00:54 AM - File change detected. Starting incremental compilation...


lib2/data.ts(5,13): error TS2322: Type '{ title: string; }' is not assignable to type 'ITest'.
  Object literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?


12:01:01 AM - Found 1 error. Watching for file changes.


Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/app.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib2/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib2/data.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/tools/public.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
