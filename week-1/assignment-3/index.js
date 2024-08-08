const crypto = require(`crypto`);

/* Assingment 3: find a nonce for the following input - 
                      harkirat => Raman | Rs 100
                      Ram => Ankit | Rs 10 */

const data = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
`;
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
