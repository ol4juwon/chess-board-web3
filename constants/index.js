export const abi = [
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_maxNumberOfPlayers",
        "type": "uint8"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "privacy",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "entryFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasEnded",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "currency",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "created_on",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "player1",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "player2",
        "type": "bool"
      }
    ],
    "name": "GameCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "privacy",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "entryFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasEnded",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "currency",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "created_on",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "player1",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "player2",
        "type": "bool"
      }
    ],
    "name": "GameDetails",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Games",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
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
        "internalType": "bool",
        "name": "hasEnded",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "currency",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "created_on",
        "type": "string"
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
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "JoinGame",
    "outputs": [],
    "stateMutability": "payable",
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
      },
      {
        "internalType": "string",
        "name": "_createdOn",
        "type": "string"
      }
    ],
    "name": "createGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gameCount",
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
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getGameDetails",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxNumberOfPlayers",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numOfPlayerAdded",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
export const GAME_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";