# VeriSafe-Assets
List of known assets for use in the Dex or TipGram Bot

If users would like to add their own tokens, or new tokens to the TipGramBot or The Dex features, then a request can be made directly in GitHub. 

Please fork the repo, update file https://github.com/VeriSafe/VeriSafe-Assets/blob/master/settingsAssets.json adding the details near the bottom of the file, commit to your repo, and then make the pull request.

The pull requests will be reviewed at regular intervals. Please do not chase for updates, as all requests will be made at the team's discretion.

Example formatting:

```
"ticker": {
	"ticker": "TICKER",
	"type" : "erc20",
	"addressType" : "ethereum",
	"name": "Token Name",
	"customEmoji" : "🍑",
	"coinGeckoId" : "token-name",
	"mainnet-contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
	"testnet-contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
	"contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
	"feeTicker" : "eth",
	"useDynFee" : true,
	"useDynUSDFee" : false,
	"events" : true,
	"withdrawal" : true,
	"info": "https://t.me/YourSpace",
	"withdrawalInfo": "Important info here",
	"minimumWithdrawalCharge": 10000000,
	"maximumWithdrawalCharge": 10000000,
	"minimumWithdrawal": 1,
	"maximumWithdrawal": 2000000,
	"decimals": 18,
	"safeGasAmount" : 140000,
	"games": {
		"fight": {
			"houseFee": 3,
			"minTokens": 10,
			"maxTokens": 10000,
			"name": "Fight"
		},
		"dice": {
			"houseFee": 3,
			"minTokens": 10,
			"maxTokens": 10000,
			"name": "Dice"
		}
	},
	"rules" : {
		"rain": {
			"minTokens": 10
		},
		"tip" : {
			"minTokens" : 10
		}
	}
}
```
