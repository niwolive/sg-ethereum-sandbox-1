const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

console.log(abi)
console.log(evm)

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of thoses accounts to deply
  // the contract
});


describe('Inbox', () => {
  it('deployes a contract', () => {
    console.log(accounts);
  });
});
