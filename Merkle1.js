const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const { soliditySha3 } = require('web3-utils')

class Merkle {
	constructor() {
		// We'll need to hardcode these whitelists for the web server to
		// instantiate the Merkle Trees onto the frontend.

		// The issue is that require('fs') does not exist on the browser,
		// so the CSV files cannot be read on the frontend because Node.js
		// does not exist in the browser.
		this.whitelistAddresses = [
			[
				['0xC1bC29ef5Cff0C1958DF3426Ebc765f0A3230678', 1],
			],
		
		]
		this.merkleTrees = []

		// Use the code below and the commented run() function at the bottom
		// of the file when you want to run this script by itself as
		// "node utils/merkle.js" on the command line.

		// var fs = require('fs');
		// const readFile = (filePath) => {
		//   try {
		//     const data = fs.readFileSync(filePath, 'utf8');
		//     const addresses = data.split('\n');
		//     return addresses;
		//   } catch (err) {
		//     console.log(err);
		//   }
		// };
		// let d = readFile('./utils/whitelists/0.csv');
		// this.whitelistAddresses[0] = d;
		// console.log('loaded file 0.csv');
		// d = readFile('./utils/whitelists/1.csv');
		// this.whitelistAddresses[1] = d;
		// console.log('loaded file 1.csv');
		// d = readFile('./utils/whitelists/2.csv');
		// this.whitelistAddresses[2] = d;
		// console.log('loaded file 2.csv');
		// console.log('Finished loading data from CSVs...');

		// console.log('Generating MerkleTrees...');
		this.merkleTrees[0] = this.generateMerkleTree(0)
		// this.merkleTrees[1] = this.generateMerkleTree(1)
		// this.merkleTrees[2] = this.generateMerkleTree(2)

		// console.log('Printing the trees...');
		// console.log('Tree 0\n', this.merkleTrees[0].toString());
		// console.log('Tree 1\n', this.merkleTrees[1].toString());
		// console.log('Tree 2\n', this.merkleTrees[2].toString());

		// console.log('\n================\n\n');
	}

	generateMerkleTree(phase) {
	console.log (phase);
	console.log (this.whitelistAddresses[phase]);
		const leaves = this.whitelistAddresses[phase].map((addr) =>
			soliditySha3(addr)
		)
		var tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
		return tree
	}

	getMerkleRoot(phase) {
		var tree = this.merkleTrees[phase]
		return tree.getRoot()
	}

	getProof(addr, phase) {
		var tree = this.merkleTrees[phase]
		return tree.getHexProof(soliditySha3(addr))
	}

	run() {
		console.log(
			'm.getMerkleRoot(0):\t',
			`0x${m.getMerkleRoot(0).toString('hex')}`
		)
		// console.log(
		// 	'm.getMerkleRoot(1):\t',
		// 	`0x${m.getMerkleRoot(1).toString('hex')}`
		// )
		// console.log(
		// 	'm.getMerkleRoot(2):\t',
		// 	`0x${m.getMerkleRoot(2).toString('hex')}`
		// )

		// console.log(
		//   'm.getProof(0x082Fc1776d44f69988C475958A0505A5BC2cd77b):\n\t\t\t',
		//   JSON.stringify(
		//     m.getProof('0x082Fc1776d44f69988C475958A0505A5BC2cd77b', 0),
		//   ),
		// );
		// console.log(
		//   'm.getProof(0x00000000f0a3bF37085E13814053a92C063635FC):\n\t\t\t',
		//   JSON.stringify(
		//     m.getProof('0x00000000f0a3bF37085E13814053a92C063635FC', 0),
		//   ),
		// );
	}
}

const m = new Merkle()

m.run();
// export default m
