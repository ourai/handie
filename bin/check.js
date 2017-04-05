#!/usr/bin/env node

"use strict";

const path = require("path");

if ( !require("fs").existsSync(path.resolve(__dirname, "../libs")) ) {
  require("child_process").execSync("npm run embed", {
    cwd: path.resolve(__dirname, "..")
  });
}
