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
	"mainnet-contract": "0xe7e4279b80d319ede2889855135a22021baf0907",
	"testnet-contract": "0x6A8094D90177bC60c30A8B895bce616Be7496427",
	"contract": "0xe7e4279b80d319ede2889855135a22021baf0907",
	"info": "https://t.me/YourCommunity",
	"ethOnly" : true,
	"minimumWithdrawalCharge": 200000,
	"maximumWithdrawalCharge": 600000,
	"decimals": 18,
	"games": {
		"dice": {
			"houseFee": 3,
			"minTokens": 1000,
			"maxTokens": 10000,
			"name": "ZeusDice"
		}
	}
},
```
