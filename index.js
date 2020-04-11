console.log("VeriSafe Assets():start");
const decache = require("decache");
let settingsAssets;
let allAssets = {};
function reBuildAssets() {
	console.log("VeriSafe Assets: About to get settingsAssets.json and reassign.");
	decache("./settingsAssets.json");
	settingsAssets = require("./settingsAssets.json");
	// put the contents of tokens, directly into assets (no parent container)
	console.log("VeriSafe Assets: About to reassign allAssets from settingsAssets.");
	allAssets = {...settingsAssets.tokens, ...settingsAssets.coins};
}
reBuildAssets();
console.log("VeriSafe Assets: About to set up reBuild for updating assets");
setInterval(reBuildAssets, 0.1 * 60 * 1000);
module.exports = {
	allAssets : () => allAssets,
	onlyCoins : () => settingsAssets.coins,
	onlyTokens : () => settingsAssets.tokens
};
console.log("VeriSafe Assets:() processed");