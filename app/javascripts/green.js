import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import green_artifacts from '../../build/contracts/GreenChain.json'

var GreenChain = contract(green_artifacts);

window.GreenChainAPI = {

	unmarshallBlock: function unmarshallBlock(marshalledBlock) {
		data = {
			"magic0": {
				"uniqueID": 123,
				"owner": "SolidMetal srl",
				"name": "Aluminium block",
				"quantity": 5000,
				"lca": {
					"co2": 8
				}
			},
			"magic01": {
				"uniqueID": 123,
				"owner": "MetalWorks srl",
				"name": "Aluminium block",
				"quantity": 10000,
				"lca": {
					"co2": 12
				}
			},
			"magic1": {
				"uniqueID": 123,
				"owner": "Apple",
				"name": "iPhone 8",
				"quantity": 120,
				"lca": {
					"co2": 79,
					"o3": 20
				}
			},
			"magic2": {
				"uniqueID": 124,
				"owner": "Apple",
				"name": "iPhone 7",
				"quantity": 100,
				"lca": {
					"co2": 89,
					"o3": 21
				}
			},
			"magic3": {
				"uniqueID": 124,
				"owner": "Apple",
				"name": "iPhone X",
				"quantity": 200,
				"lca": {
					"co2": 82,
					"o3": 21
				}
			}, 
		};
		return data[marshalledBlock];
	},

	unmarshallList: function unmarshallList(marshalledList) {
		let unmarshallBlocks = ["magic0", "magic01", "magic1", "magic2", "magic3"];
		let result = [];		
		unmarshallBlocks.forEach((marshalledBlock) => {
			result.push(GreenChainAPI.unmarshallBlock(marshalledBlock));
		});
		return result;
	},

	fetchBlocks: function fetchBlocks(address) {
		return GreenChainAPI.unmarshallList(GreenChain.fetchBlocks(address));
	},

	fetchAllBlocks: function fetchAllBlocks() {
		return GreenChainAPI.unmarshallList(GreenChain.fetchAllBlocks());
	},

	addBlock: function addBlock(name, quantity, blueprint) {
		// function addBlock(string name, uint quantity, GreenBlockBlueprint blk);

		return;
	}
};
