const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc')

module.exports = web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const code = fs.readFileSync('./contracts-sol/Voting.sol').toString();
const compiledCode = solc.compile(code);

const abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
const DeviceContract = web3.eth.contract(abiDefinition);

const byteCode = compiledCode.contracts[':Voting'].bytecode;

let deployedContract = DeviceContract.new(
  ['Raphael', 'Safi'], {
    data: byteCode, 
    from: web3.eth.accounts[0],
    gas: 4700000
  }, (e, contract) => {
    if(!e) {
      if(!contract.address) {
        console.log(`Contract transaction send: TransactionHash: ${contract.transactionHash}" waiting to be mined...`);
      } else {
        console.log(`address ok - ${deployedContract.address}`);
        return DeviceContract.at(deployedContract.address);
      }
    }
});

module.exports = deployedContract;