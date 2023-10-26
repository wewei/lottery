#!/usr/bin/env node

import { run } from "./server.js";

run(...process.argv.slice(2));
// require("./server.js").run.apply(null, process.argv.slice(2));
