// #!/usr/bin/env node

const program = require("commander");
const colors = require("colors");
const clipboard = require("node-clipboardy");
const createPassword = require("./middlewares/createPassword");
const savePassword = require("./middlewares/savePassword");
const log = console.log;

// Program version & description
// Program command line options
program
  .version("1.0.0")
  .description("A Node js Command Line Password Generator");
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password value to a password.txt file")
  .option("-nn, --no-numbers", "remove numbers from generated password")
  .option("-ns, --no-symbols", "remove symbols from generated password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get the generated password
const generatedPassword = createPassword(length, numbers, symbols);



// Terminal Output

log("Generating users password....".black);

setTimeout(() => {
  // Output password
  log("Generated Password: ".bgBlue, generatedPassword.bgWhite);

  // Copy to clipboard
  clipboard.writeSync(generatedPassword);

  // Save to file if command option was add
  if (save) {
    savePassword(generatedPassword);
  }

  // return copied message
  log("Password Copied!".bgYellow);
}, 1000);
