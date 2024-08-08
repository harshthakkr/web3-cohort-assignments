const crypto = require(`crypto`);

// Assignment 2: input string should start with 100xdevs

const data = `100xdevs`;
let nonce = 0;
while (true) {
  const hash = crypto
    .createHash(`sha256`)
    .update(data + nonce)
    .digest(`hex`);
  if (hash.startsWith(`00000`)) {
    console.log(nonce);
    console.log(hash);
    break;
  }
  nonce++;
}
