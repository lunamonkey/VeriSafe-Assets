async function main(){
	console.log("VeriSafe Assets:main()");
	process.core = process.core || {};
	process.core.assets = process.core.assets || {};

	// retrieve settings from files
	console.log("VeriSafe Assets: About to set assets.");
	process.assets = require("./settingsAssets.json");

	// put the contents of tokens, directly into assets (no parent container)

	console.log("VeriSafe Assets: About to set core-assets-tokens from assets-tokens.");
	Object.assign(process.core.assets, process.assets.tokens);
	// put the contents of coins, directly into assets (no parent container)

	console.log("VeriSafe Assets: About to set core-assets-coins from assets-coins.");
	Object.assign(process.core.assets, process.assets.coins);

	var decache = require('decache');
	console.log("VeriSafe Assets: About to set up main jobs");
	setInterval(() => {
		console.log("VeriSafe Assets: About to get assets and reassign.");
		decache("./settingsAssets.json");
		process.assets = require("./settingsAssets.json");
		// put the contents of tokens, directly into assets (no parent container)
		console.log("VeriSafe Assets: About to reassign core-assets-tokens from assets-tokens.");
		Object.assign(process.core.assets, process.assets.tokens);
		// put the contents of coins, directly into assets (no parent container)
		console.log("VeriSafe Assets: About to reassign core-assets-coins from assets-coins.");
		Object.assign(process.core.assets, process.assets.coins);
	}, 5 * 1000);
}

(async () => {
    try {
		console.log("VeriSafe Assets:() before");
        await main();
		console.log("VeriSafe Assets:() done");
    } catch (e) {
        /*eslint no-console: ["error", {allow: ["error"]}]*/
        console.error("VeriSafe Assets:Main: error:(e)", e);
	}
})();