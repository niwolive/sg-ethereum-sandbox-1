const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const params = {
    language: "Solidity",
    sources: {
      "Inbox": {
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
module.exports = solc.compile(JSON.stringify(params)).contracts[':Inbox'];

