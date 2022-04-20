import { exec as temp_exec } from "child_process";
import util from "util";
import fs from "fs";
import path from "path";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
const exec = util.promisify(temp_exec);

try {
  await exec("git add .");
  await exec(`git commit -m "I just got pranked!"`);
} catch (err) {}

fs.readdir(process.cwd(), async (err, files) => {
  if (err) throw err;

  files = files.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
  for (const file of files) {
    const path_string = path.join(process.cwd(), file);
    // if (fs.lstatSync(path_string).isDirectory()) {
    //   fs.rmdir(path_string, { recursive: true }, (err) => {
    //     if (err) throw err;
    //   });
    // } else {
    //   fs.unlink(path_string, (err) => {
    //     if (err) throw err;
    //   });
    // }
    // fs.rmSync(path_string, { recursive: true });
  }
  // const badLBozoRatio = await figlet("You just got pranked!");
  // console.log(badLBozoRatio);
  // chalkAnimation.rainbow(figlet("You just got pranked!"));
  figlet("You just got pranked!", (err, data) => {
    chalkAnimation.rainbow(data);
    chalkAnimation.glitch("By http://localhost:3000");
  });
});
