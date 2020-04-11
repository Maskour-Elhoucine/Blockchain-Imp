const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate keys
var key = ec.genKeyPair();
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');


// console.log('Private Key: '+privateKey);
// console.log('Public Key: '+publicKey);
