const { randomBytes, createHmac } = require('crypto')

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex');

const randomHash = randomBytes(16).toString('hex')

console.log("hash response ===========================", hash);
console.log('randomHash response =========================', randomHash)