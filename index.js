console.log("VeriSafe Assets: About to set assets.");
let settingsAssets = require("settingsAssets.json");
let allAssets;
function reBuildAssets() {
	var decache = require('decache');
 	allAssets = {};
	console.log("VeriSafe Assets: About to get assets and reassign.");
	decache("settingsAssets.json");
	settingsAssets = require("settingsAssets.json");
	// put the contents of tokens, directly into assets (no parent container)
	console.log("VeriSafe Assets: About to reassign core-assets-tokens from assets-tokens.");
	Object.assign(allAssets, settingsAssets.tokens);
	// put the contents of coins, directly into assets (no parent container)
	console.log("VeriSafe Assets: About to reassign core-assets-coins from assets-coins.");
	Object.assign(allAssets, settingsAssets.coins);
}

module.exports = async () => {
	console.log("VeriSafe Assets: About to set allAssets-tokens from settingsAssets-tokens.");
	Object.assign(allAssets, settingsAssets.tokens);

	console.log("VeriSafe Assets: About to set allAssets-coins from settingsAssets-coins.");
	Object.assign(allAssets, settingsAssets.coins);

	console.log("VeriSafe Assets: About to set up reBuild for updating assets");
	setInterval(reBuildAssets(), 5 * 60 * 1000);
	console.log("VeriSafe Assets:() done");
	
	return{
		assets : allAssets,
		coins : settingsAssets,
		tokens : settingsAssets.tokens
	};
};


