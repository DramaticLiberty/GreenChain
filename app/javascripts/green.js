import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import green_artifacts from '../../build/contracts/GreenChain.json'

var GreenChain = contract(green_artifacts);

window.GreenChainAPI = {

	unmarshallBlock: function unmarshallBlock(marshalledBlock) {
		return {
			"uniqueID": 123,
			"owner": "Apple address",
			"name": "iPhone",
			"quantity": 12,
			"lca": {
				"co2": 79,
				"o3": 20
			}
		};
	},

	unmarshallList: function unmarshallList(marshalledList) {
		let unmarshallList = ['magic1', 'magic2'];
		let result = [];		
		unmarshallList(serializedBlocks).forEach((marshalledBlock) => {
			result.push(unmarshallBlock(marshalledBlock));
		});
		return result;
	},

	fetchBlocks: function fetchBlocks(address) {
		return unmarshallList(GreenChain.fetchBlocks(address));
	},

	fetchAllBlocks: function fetchAllBlocks() {
		return unmarshallList(GreenChain.fetchAllBlocks());
	},

	addBlock: function addBlock(name, quantity, blueprint) {
		// function addBlock(string name, uint quantity, GreenBlockBlueprint blk);

		return;
	}
};
