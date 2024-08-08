const crypto = require(`crypto`);

// Assignment 1: Give me an input string that outputs a SHA-256 hash that starts with 00000

let nonce = 0;
while (true) {
  const hash = crypto
    .createHash(`sha256`)
    .update(nonce.toString())
    .digest(`hex`);
  if (hash.startsWith(`00000`)) {
    console.log(nonce);
    console.log(hash);
    break;
  }
  nonce++;
}
