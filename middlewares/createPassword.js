const { alpha, numbers, symbols } = require("../utils/password");

// Create user ideal password

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let characters = alpha;
  hasNumbers ? (characters += numbers) : "";
  hasSymbols ? (characters += symbols) : "";
  return generatePassword(length, characters);
};

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
};

module.exports = createPassword;
