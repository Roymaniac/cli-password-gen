const fs = require("fs");
const path = require("path");
const os = require("os");
const log = console.log;

const savePassword = (password) => {
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, fd) => {
    fs.write(fd, password + os.EOL, null, "utf-8", () => {
      fs.close(fd, () => {
        log("Password Saved to passwords.txt".bgGreen);
      });
    });
  });
};

module.exports = savePassword;
