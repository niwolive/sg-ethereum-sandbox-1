const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const params = {
    language: "Solidity",
    sources: {
      "Inbox.sol": {
        content: fs.readFileSync(inboxPath, 'utf-8')
      }
    },
    settings: {
      outputSelection: {
        "*": {
          "*": [ "abi", "evm.bytecode" ]
        }
      }
    }
};
module.exports = JSON.parse(solc.compile(JSON.stringify(params))).contracts['Inbox.sol'].Inbox;

