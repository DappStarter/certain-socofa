require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom clog other security notice birth soap unaware hunt credit equal gasp'; 
let testAccounts = [
"0xcf03935afab3fd5d3c7d741eef9681a9796969d702c15e252cc59162dac38ed9",
"0x76b1a92f47bbe2fdc2fcc918eafb4df563cb058d68c9d9fa37ef511b2f013df1",
"0x65e7c11657664a01ba5888a1b58108fb7ec5430c0c3c83e1f2098e99713ddaf2",
"0x7518e8c5b426b77fd0108328a932fd45a911c0666ca5fc6e4d73481d55459807",
"0xd5408cd6257b5b47fe3b0520210b5fc1314fdc690aa69193133101692c25852b",
"0xa87674d321b0f3b257c53966252a1c24c74096772e87a4ea139e6af2ff0b2b4e",
"0x67f93736a55d9b8a283db4ae23bf3e93a25d97e567cca3cd1132ab4456134037",
"0xf8035d551df114309433786c4e91cb8b7f05a1f0087f8abace57605a601aeb93",
"0x6d7acf2947675ba19537cea077984d0c53139b992ab9ef35ccc04e0f43fae643",
"0x1d2c79c75f5e121c3c4d0dac237fb8b9f19c2d2da610b6283eb1268406341a61"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

