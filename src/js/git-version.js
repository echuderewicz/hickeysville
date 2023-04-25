import { execSync } from "child_process";

export const version = execSync("git describe --always --tags --abbrev=0")
  .toString()
  .trim();

console.log(version);
