const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

let accounts;
let message;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  message = 'Hi there';

  // Use one of thoses accounts to deply
  // the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [message] })
    .send({ from: accounts[0], gas: '1000000'});
});


describe('Inbox', () => {
  it('deployed a contract', () => {
    // check contract has adress
    assert.ok(inbox.options.address);
  });
  it('Constructs the contract with specified message', async () => {
    let msg = await inbox.methods.message().call();
    assert.equal(msg,message);

  });
  it('Updates the message of the contract', async () => {
    const newMsg = 'Good';
    await inbox.methods.setMessage(newMsg).send({ from: accounts[0] });
    let msg = await inbox.methods.message().call();
    assert.equal(msg,newMsg);
  });
});
