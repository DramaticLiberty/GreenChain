pragma solidity ^0.4.2;

contract GreenChain {
	struct GreenBlock {
		uint uniqueID;
    	address owner;
    	string name;
    	uint quantity;
		mapping (string => double) lca;
	}

  	struct GreenBlockBlueprint {
		mapping (uint => GreenBlock) parts;
  	}

  	uint blkid;
  	mapping (uint => GreenBlock) inventory;

	function GreenChain() {
		blkid = 0;
	}

  	function addBlock(string name, uint quantity, GreenBlockBlueprint blk) {
  		blkid = blkid++;
  		inventory[blkid] = GreenBlock(blkid, msg.sender, name, quantity, blk[0].lca);
  	}

  	function fetchAllBlocks() constant returns (mapping (uint => GreenBlock)) {
    	return inventory;
  	}

  	function fetchBlocks(address owner) constant returns (mapping (uint => GreenBlock)) {
    	return inventory;
  	}
}
