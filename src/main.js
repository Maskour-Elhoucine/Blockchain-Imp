const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const keys = require('./savedKeys');

const myKey = ec.keyFromPrivate(keys.privateKey);
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

const trans1 = new Transaction(myWalletAddress, 'public-keys-of-some-one', 30);
trans1.signTransaction(myKey);
coin.addTransaction(trans1);



console.log('\nStarting the miner ...');
coin.minePendingTransactions(myWalletAddress);
console.log('\nBalance Of '+myWalletAddress+' Is: '+ coin.getBalanceOfAddress(myWalletAddress));

/*
coin.chain[1].transactions[0].amount = 10;
console.log('Is Chain Valid? :'+ coin.isChainValid());
*/
