# VeriSafe-Assets
List of known assets for use in the Dex or TipGram Bot

If users would like to add their own tokens, or new tokens to the TipGramBot or The Dex features, then a request can be made directly in GitHub. 

Please fork the repo, update file https://github.com/VeriSafe/VeriSafe-Assets/blob/master/settingsAssets.json adding the details near the bottom of the file, commit to your repo, and then make the pull request.

The pull requests will be reviewed at regular intervals. Please do not chase for updates, as all requests will be made at the team's discretion.

Example formatting:

```
{
	"id" : "ticker",
	"ticker": "TICKER",
	"type" : "erc20",
	"addressType" : "ethereum",
	"name": "Token Name",
	"events" : true,
	"withdrawal" : true,
	"safeGasAmount" : 140000,
	"info":{
		"customEmoji" : "🍑",
		"coinGeckoId" : "token-name",
		"telegram": "https://t.me/YourSpace",
		"withdrawalInfo": "Important info here"
	},
	"blockchain":{
		"mainnet-contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
		"testnet-contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
		"contract": "0x29fb74adb604cd520892443299e36cb3b4b23b62",
		"decimals": 18
	},
	"charges" : {
		"feeTicker" : "eth",
		"useTargetAltAsFee" : true,
		"useTargetSelfAsFee" : false,
		"useForceAltAsFee" : false,
		"minimumWithdrawalCharge": 10000000,
		"maximumWithdrawalCharge": 10000000,
	},
	"games": [
		{
			"command" : "fight",
			"houseFee": 3,
			"minValue": 10,
			"maxValue": 10000,
			"name": "Fight"
		},
		{
			"command" : "dice",
			"houseFee": 3,
			"minValue": 10,
			"maxValue": 10000,
			"name": "Dice"
		}
	],
	"rules" : [
		{
			"command" :"rain",
			"minValue": 10
		},
		{
			"command": "tip",
			"minValue" : 10
		},
		{
			"command" : "withdraw",
			"minValue" : 1,
			"maxValue" : 1000000
		}
	]
}
```
