const fs = require("fs");
// Copy file
fs.copyFileSync("src/gh-config.js", "src/app-config.js");