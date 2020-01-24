# VeriSafe-Assets
List of known assets for use in the Dex or TipGram Bot

If users would like to add their own tokens, or new tokens to the TipGramBot or The Dex features, then a request can be made directly in GitHub. 

Please fork the repo, update file https://github.com/VeriSafe/VeriSafe-Assets/blob/master/settingsAssets.json adding the details near the bottom of the file, commit to your repo, and then make the pull request.

The pull requests will be reviewed at regular intervals. Please do not chase for updates, as all requests will be made at the team's discretion.

Example formatting:

```
"ticker": {
	"ticker": "TICKER",
	"name": "Token Name",
	"mainnet-contract": "Duplicate - ignore this",
	"testnet-contract": "supply kovan testnet if possible",
	"contract": "0xe7e4279b80d319ede2889855135a22021baf0907",
	"info": "https://t.me/YourCommunity",
	"ethOnly" : true,
	"minimumWithdrawalCharge": 200000,
	"maximumWithdrawalCharge": 600000,
	"minimumWithdrawal": 1,
	"maximumWithdrawal": 100000000000,
	"decimals": 18,
	"safeGasAmount": 100000,
	"withdrawalInfo": "".
	"games": {
		"dice": {
			"houseFee": 3,
			"minTokens": 0.1,
			"maxTokens": 10,
			"name": "TokenDice"
		},
		"fight": {
			"houseFee": 3,
			"minTokens": 20,
			"maxTokens": 2000,
			"name": "TokenFight"
		}
	},
	"rules" : {
		"tip" : {
			"minTokens" : 10
		}
		"rain": {
			"minTokens": 0.1
		}
	}
},
```
