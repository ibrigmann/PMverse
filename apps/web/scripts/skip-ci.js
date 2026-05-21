const { execSync } = require("child_process");

const commitMessage = execSync("git log -1 --pretty=%B").toString().trim();

if (commitMessage.includes("[skip vercel]")) {
  console.log("Skipping Vercel build due to [skip vercel] in commit message.");
  process.exit(0); // this causes Vercel to skip the build
}

console.log("Build allowed.");
process.exit(1); // continue with build
