export const abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "actionType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum GameManagerV2.HASENDED",
				"name": "hasEnded",
				"type": "uint8"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "executor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "created",
				"type": "uint256"
			}
		],
		"name": "Action",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "AddPlayerToGame",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_privacy",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_currency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_entryFee",
				"type": "uint256"
			}
		],
		"name": "CreateGame",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "GameEnded",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardPlayer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "activeGamesCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "creatorOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "getAddedPlayersNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "getGame",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "gameId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "privacy",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "entryFee",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "enum GameManagerV2.HASENDED",
						"name": "hasEnded",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "created_on",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "updated_on",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "player1",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "player2",
						"type": "bool"
					}
				],
				"internalType": "struct GameManagerV2.GameStruct",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGames",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "gameId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "privacy",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "entryFee",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "enum GameManagerV2.HASENDED",
						"name": "hasEnded",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "created_on",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "updated_on",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "player1",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "player2",
						"type": "bool"
					}
				],
				"internalType": "struct GameManagerV2.GameStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInactiveGames",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "gameId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "privacy",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "entryFee",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "enum GameManagerV2.HASENDED",
						"name": "hasEnded",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "created_on",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "updated_on",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "player1",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "player2",
						"type": "bool"
					}
				],
				"internalType": "struct GameManagerV2.GameStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "inactiveGamesCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nump",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const GAME_CONTRACT_ADDRESS = "0x16462FB68BBa00a6081a60f653Eaa2fdA7e40b9b";