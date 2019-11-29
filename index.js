async function main(){
	process.core = process.core || {};
	process.core.assets = process.core.assets || {};

	// retrieve settings from files
	process.assets = require("./settingsAssets.json");

	var decache = require('decache');
	console.log("VeriSafe Assets: About to set up main jobs");
	setInterval(() => {
		console.log("VeriSafe Assets: About to get assets and reassign.");
		decache("./settingsAssets.json");
		process.assets = require("./settingsAssets.json");
		// put the contents of tokens, directly into assets (no parent container)
		Object.assign(process.core.assets, process.assets.tokens);
		// put the contents of coins, directly into assets (no parent container)
		Object.assign(process.core.assets, process.assets.coins);
	}, 5 * 60 * 1000);
}

(async () => {
    try {
        await main();
    } catch (e) {
        /*eslint no-console: ["error", {allow: ["error"]}]*/
        console.error("VeriSafe Assets:Main: error:(e)", e);
	}
})();