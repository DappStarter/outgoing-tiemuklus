require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind minor grace hill food supreme'; 
let testAccounts = [
"0x608414a63dbd9b4e948c9f3669e1d8ac04e3d2f2314c98e7b77270f53a1307c4",
"0xdf53c8cd9be66c87bdc123c5b2f57abecb79e2d97e3d7928e7b29bb77597c013",
"0xee58a38eab0c1fe6bffdf848c8bb75874c73cb29486e3fe2d785593d037b9ff9",
"0x50b6650dbb144dc29cbe0870293ede8aed78d90ded4edef95da6ae77f0db1b37",
"0x5409a8fd4977ecb86a7849c5dd9bf1676483b39682e3683f44a6cae45eb20e89",
"0xf7bafaaad9d8fb3afa850c62f20d12a36cdd3ef29ff3d60ea37ec76058d18d6e",
"0x55edb6a416c0bc958b7ade7d725db942424386491101f0a362556cad267b7b3e",
"0x741f20d34d637e8955ba6e766b28636c5729dd0fb575a33723d4629f4fff20ae",
"0x9b50e754583f42097a8097d4bfc6d78c32ead74c5cba5ef0c5fc9f0de2a29fbf",
"0x21035c58a7d8508234d1a2d1d099a520521f7d4efb6b5ade88a2170b1e73f97c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
