// Remplacez par votre adresse de contrat et votre ABI
const contractAddress = '0x5943b9b08bCB89387acCeAbDF94c57cCD086ae83';
const contractABI = {
  "contractName": "Donation",
  "abi": [
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
          "internalType": "address",
          "name": "donateur",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "montant",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "DonationEffectuee",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "donateurToDonations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "donations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "donateur",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "montant",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "nextId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "createDonation",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_donateur",
          "type": "address"
        }
      ],
      "name": "getDonationsByDonateur",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"donateur\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"montant\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"DonationEffectuee\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[],\"name\":\"createDonation\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"donateurToDonations\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"donations\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"donateur\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"montant\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_donateur\",\"type\":\"address\"}],\"name\":\"getDonationsByDonateur\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Donation.sol\":\"Donation\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Donation.sol\":{\"keccak256\":\"0xa5069ed179b292d3656d4c4a2de3c2ac123caa0c4c30e3dbe71e371610c07222\",\"urls\":[\"bzz-raw://e729c9ad093a6bd6c70e81d0b1b4887945894cfc208975bbf1a4501a36d0ac52\",\"dweb:/ipfs/QmQvjpmh8MvHJDdNUCZ6aELibJpz7vRrkxe8njdN6vyvyU\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506103ef806100206000396000f3fe60806040526004361061004a5760003560e01c806308196a9e1461004f5780635a0dbc781461005957806361b8ce8c146100a457806388c656ab146100b9578063f8626af81461013c575b600080fd5b610057610194565b005b34801561006557600080fd5b506100926004803603604081101561007c57600080fd5b506001600160a01b0381351690602001356102b5565b60408051918252519081900360200190f35b3480156100b057600080fd5b506100926102e3565b3480156100c557600080fd5b506100ec600480360360208110156100dc57600080fd5b50356001600160a01b03166102e9565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610128578181015183820152602001610110565b505050509050019250505060405180910390f35b34801561014857600080fd5b506101666004803603602081101561015f57600080fd5b5035610355565b604080519485526001600160a01b039093166020850152838301919091526060830152519081900360800190f35b600034116101d35760405162461bcd60e51b81526004018080602001828103825260348152602001806103876034913960400191505060405180910390fd5b60408051608080820183526002805480845233602080860182815234878901818152426060808b0182815260009889528887528c89209b518c5594516001808d0180546001600160a01b0319166001600160a01b039093169290921790915592518b8a015593516003909a01999099558486528084528986208754815492830182559087529584902001949094559354875190815290810191909152808601919091529081019290925291517f60d5f0d88e0c6b9b25d4051f2e7a6e08d7349db58e27cc44f410bb146922289a929181900390910190a1600280546001019055565b600160205281600052604060002081815481106102ce57fe5b90600052602060002001600091509150505481565b60025481565b6001600160a01b03811660009081526001602090815260409182902080548351818402810184019094528084526060939283018282801561034957602002820191906000526020600020905b815481526020019060010190808311610335575b50505050509050919050565b600060208190529081526040902080546001820154600283015460039093015491926001600160a01b03909116918456fe4c65206d6f6e74616e74206465206c6120646f6e6174696f6e20646f69742065747265207375706572696575722061207a65726fa265627a7a72315820a169fcf6abde0f3b894488f899e461c0e7d1ae9d7fef997590287d5f4b6194e264736f6c63430005100032",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c806308196a9e1461004f5780635a0dbc781461005957806361b8ce8c146100a457806388c656ab146100b9578063f8626af81461013c575b600080fd5b610057610194565b005b34801561006557600080fd5b506100926004803603604081101561007c57600080fd5b506001600160a01b0381351690602001356102b5565b60408051918252519081900360200190f35b3480156100b057600080fd5b506100926102e3565b3480156100c557600080fd5b506100ec600480360360208110156100dc57600080fd5b50356001600160a01b03166102e9565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610128578181015183820152602001610110565b505050509050019250505060405180910390f35b34801561014857600080fd5b506101666004803603602081101561015f57600080fd5b5035610355565b604080519485526001600160a01b039093166020850152838301919091526060830152519081900360800190f35b600034116101d35760405162461bcd60e51b81526004018080602001828103825260348152602001806103876034913960400191505060405180910390fd5b60408051608080820183526002805480845233602080860182815234878901818152426060808b0182815260009889528887528c89209b518c5594516001808d0180546001600160a01b0319166001600160a01b039093169290921790915592518b8a015593516003909a01999099558486528084528986208754815492830182559087529584902001949094559354875190815290810191909152808601919091529081019290925291517f60d5f0d88e0c6b9b25d4051f2e7a6e08d7349db58e27cc44f410bb146922289a929181900390910190a1600280546001019055565b600160205281600052604060002081815481106102ce57fe5b90600052602060002001600091509150505481565b60025481565b6001600160a01b03811660009081526001602090815260409182902080548351818402810184019094528084526060939283018282801561034957602002820191906000526020600020905b815481526020019060010190808311610335575b50505050509050919050565b600060208190529081526040902080546001820154600283015460039093015491926001600160a01b03909116918456fe4c65206d6f6e74616e74206465206c6120646f6e6174696f6e20646f69742065747265207375706572696575722061207a65726fa265627a7a72315820a169fcf6abde0f3b894488f899e461c0e7d1ae9d7fef997590287d5f4b6194e264736f6c63430005100032",
  "sourceMap": "52:910:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;52:910:0;;;;;;;",
  "deployedSourceMap": "52:910:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;426:385;;;:::i;:::-;;254:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;254:53:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;254:53:0;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;314:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;314:18:0;;;:::i;817:143::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;817:143:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;817:143:0;-1:-1:-1;;;;;817:143:0;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;817:143:0;;;;;;;;;;;;;;;;;200:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;200:48:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;200:48:0;;:::i;:::-;;;;;;;-1:-1:-1;;;;;200:48:0;;;;;;;;;;;;;;;;;;;;;;;;;;;426:385;499:1;487:9;:13;479:78;;;;-1:-1:-1;;;479:78:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:62;;;;;;;;;603:6;;;588:62;;;611:10;588:62;;;;;;;623:9;588:62;;;;;;634:15;588:62;;;;;;;-1:-1:-1;568:17:0;;;;;;;;;:82;;;;;;;;;;;;-1:-1:-1;;;;;;568:82:0;-1:-1:-1;;;;;568:82:0;;;;;;;;;;;;;;;;;;;;;;;;;;660:31;;;;;;;;;697:6;;27:10:-1;;23:18;;;45:23;;660:44:0;;;;;;;;;;;;738:6;;720:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;796:6;:8;;;;;;426:385::o;254:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;314:18::-;;;;:::o;817:143::-;-1:-1:-1;;;;;923:30:0;;;;;;:19;:30;;;;;;;;;916:37;;;;;;;;;;;;;;;;;891:13;;916:37;;;923:30;916:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;817:143;;;:::o;200:48::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;200:48:0;;;;;:::o",
  "source": "// contracts/Donation.sol\npragma solidity ^0.5.16;\n\ncontract Donation {\n    struct DonationStruct {\n        uint id;\n        address donateur;\n        uint montant;\n        uint timestamp;\n    }\n\n    mapping(uint => DonationStruct) public donations;\n    mapping(address => uint[]) public donateurToDonations;\n\n    uint public nextId;\n\n    event DonationEffectuee(uint id, address donateur, uint montant, uint timestamp);\n\n    function createDonation() external payable {\n        require(msg.value > 0, \"Le montant de la donation doit etre superieur a zero\");\n\n        donations[nextId] = DonationStruct(nextId, msg.sender, msg.value, block.timestamp);\n        donateurToDonations[msg.sender].push(nextId);\n\n        emit DonationEffectuee(nextId, msg.sender, msg.value, block.timestamp);\n\n        nextId++;\n    }\n\n    function getDonationsByDonateur(address _donateur) external view returns (uint[] memory) {\n        return donateurToDonations[_donateur];\n    }\n}\n",
  "sourcePath": "/Users/cyliahamdi/Desktop/DonationDApp/contracts/Donation.sol",
  "ast": {
    "absolutePath": "project:/contracts/Donation.sol",
    "exportedSymbols": {
      "Donation": [
        92
      ]
    },
    "id": 93,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "26:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 92,
        "linearizedBaseContracts": [
          92
        ],
        "name": "Donation",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Donation.DonationStruct",
            "id": 10,
            "members": [
              {
                "constant": false,
                "id": 3,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "108:7:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "108:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "name": "donateur",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "125:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "125:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "name": "montant",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "151:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "151:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "173:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 8,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "173:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "DonationStruct",
            "nodeType": "StructDefinition",
            "scope": 92,
            "src": "76:118:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 14,
            "name": "donations",
            "nodeType": "VariableDeclaration",
            "scope": 92,
            "src": "200:48:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_DonationStruct_$10_storage_$",
              "typeString": "mapping(uint256 => struct Donation.DonationStruct)"
            },
            "typeName": {
              "id": 13,
              "keyType": {
                "id": 11,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "208:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "200:31:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_DonationStruct_$10_storage_$",
                "typeString": "mapping(uint256 => struct Donation.DonationStruct)"
              },
              "valueType": {
                "contractScope": null,
                "id": 12,
                "name": "DonationStruct",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 10,
                "src": "216:14:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_DonationStruct_$10_storage_ptr",
                  "typeString": "struct Donation.DonationStruct"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19,
            "name": "donateurToDonations",
            "nodeType": "VariableDeclaration",
            "scope": 92,
            "src": "254:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 18,
              "keyType": {
                "id": 15,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "254:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 16,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "273:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 17,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "273:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "nextId",
            "nodeType": "VariableDeclaration",
            "scope": 92,
            "src": "314:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "314:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 31,
            "name": "DonationEffectuee",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "363:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "indexed": false,
                  "name": "donateur",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "372:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "name": "montant",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "390:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "indexed": false,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "404:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:57:0"
            },
            "src": "339:81:0"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "469:342:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 35,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 107,
                            "src": "487:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "487:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 37,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "499:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "487:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4c65206d6f6e74616e74206465206c6120646f6e6174696f6e20646f69742065747265207375706572696575722061207a65726f",
                        "id": 39,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "502:54:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6b5cb002bb53552027f5b3f0818364e2bd9659372781260f02b63c43ccc63d0e",
                          "typeString": "literal_string \"Le montant de la donation doit etre superieur a zero\""
                        },
                        "value": "Le montant de la donation doit etre superieur a zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6b5cb002bb53552027f5b3f0818364e2bd9659372781260f02b63c43ccc63d0e",
                          "typeString": "literal_string \"Le montant de la donation doit etre superieur a zero\""
                        }
                      ],
                      "id": 34,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        110,
                        111
                      ],
                      "referencedDeclaration": 111,
                      "src": "479:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "479:78:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "479:78:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 42,
                        "name": "donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "568:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_DonationStruct_$10_storage_$",
                          "typeString": "mapping(uint256 => struct Donation.DonationStruct storage ref)"
                        }
                      },
                      "id": 44,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "nextId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "578:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "568:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DonationStruct_$10_storage",
                        "typeString": "struct Donation.DonationStruct storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "nextId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21,
                          "src": "603:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 107,
                            "src": "611:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "611:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 49,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 107,
                            "src": "623:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "623:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 97,
                            "src": "634:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 52,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "634:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 45,
                        "name": "DonationStruct",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "588:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_DonationStruct_$10_storage_ptr_$",
                          "typeString": "type(struct Donation.DonationStruct storage pointer)"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "588:62:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DonationStruct_$10_memory",
                        "typeString": "struct Donation.DonationStruct memory"
                      }
                    },
                    "src": "568:82:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DonationStruct_$10_storage",
                      "typeString": "struct Donation.DonationStruct storage ref"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "568:82:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "nextId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "697:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 56,
                          "name": "donateurToDonations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "660:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 59,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 107,
                            "src": "680:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 58,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "680:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "660:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 60,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "660:36:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "660:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "660:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "nextId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "738:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "746:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "746:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 68,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "758:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 69,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "758:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 70,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 97,
                          "src": "769:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 71,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "769:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 64,
                      "name": "DonationEffectuee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "720:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256,uint256)"
                      }
                    },
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "720:65:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 73,
                  "nodeType": "EmitStatement",
                  "src": "715:70:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "796:8:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "nextId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "796:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "796:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createDonation",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "449:2:0"
            },
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:0"
            },
            "scope": 92,
            "src": "426:385:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 90,
              "nodeType": "Block",
              "src": "906:54:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "donateurToDonations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "923:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 88,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 87,
                      "name": "_donateur",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "943:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "923:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 85,
                  "id": 89,
                  "nodeType": "Return",
                  "src": "916:37:0"
                }
              ]
            },
            "documentation": null,
            "id": 91,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDonationsByDonateur",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "_donateur",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "849:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:19:0"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "891:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 82,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "891:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 83,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "891:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "890:15:0"
            },
            "scope": 92,
            "src": "817:143:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 93,
        "src": "52:910:0"
      }
    ],
    "src": "26:937:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/Donation.sol",
      "exportedSymbols": {
        "Donation": [
          92
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".16"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "26:24:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            92
          ],
          "name": "Donation",
          "scope": 93
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "Donation.DonationStruct",
              "name": "DonationStruct",
              "scope": 92,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 10,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "108:4:0"
                  }
                ],
                "id": 3,
                "name": "VariableDeclaration",
                "src": "108:7:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "donateur",
                  "scope": 10,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 4,
                    "name": "ElementaryTypeName",
                    "src": "125:7:0"
                  }
                ],
                "id": 5,
                "name": "VariableDeclaration",
                "src": "125:16:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "montant",
                  "scope": 10,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "151:4:0"
                  }
                ],
                "id": 7,
                "name": "VariableDeclaration",
                "src": "151:12:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "timestamp",
                  "scope": 10,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "173:4:0"
                  }
                ],
                "id": 9,
                "name": "VariableDeclaration",
                "src": "173:14:0"
              }
            ],
            "id": 10,
            "name": "StructDefinition",
            "src": "76:118:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "donations",
              "scope": 92,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => struct Donation.DonationStruct)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => struct Donation.DonationStruct)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 11,
                    "name": "ElementaryTypeName",
                    "src": "208:4:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "DonationStruct",
                      "referencedDeclaration": 10,
                      "type": "struct Donation.DonationStruct"
                    },
                    "id": 12,
                    "name": "UserDefinedTypeName",
                    "src": "216:14:0"
                  }
                ],
                "id": 13,
                "name": "Mapping",
                "src": "200:31:0"
              }
            ],
            "id": 14,
            "name": "VariableDeclaration",
            "src": "200:48:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "donateurToDonations",
              "scope": 92,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256[])",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256[])"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 15,
                    "name": "ElementaryTypeName",
                    "src": "262:7:0"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "uint256[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 16,
                        "name": "ElementaryTypeName",
                        "src": "273:4:0"
                      }
                    ],
                    "id": 17,
                    "name": "ArrayTypeName",
                    "src": "273:6:0"
                  }
                ],
                "id": 18,
                "name": "Mapping",
                "src": "254:26:0"
              }
            ],
            "id": 19,
            "name": "VariableDeclaration",
            "src": "254:53:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nextId",
              "scope": 92,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 20,
                "name": "ElementaryTypeName",
                "src": "314:4:0"
              }
            ],
            "id": 21,
            "name": "VariableDeclaration",
            "src": "314:18:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "DonationEffectuee"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "id",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 22,
                        "name": "ElementaryTypeName",
                        "src": "363:4:0"
                      }
                    ],
                    "id": 23,
                    "name": "VariableDeclaration",
                    "src": "363:7:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "donateur",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 24,
                        "name": "ElementaryTypeName",
                        "src": "372:7:0"
                      }
                    ],
                    "id": 25,
                    "name": "VariableDeclaration",
                    "src": "372:16:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "montant",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 26,
                        "name": "ElementaryTypeName",
                        "src": "390:4:0"
                      }
                    ],
                    "id": 27,
                    "name": "VariableDeclaration",
                    "src": "390:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "timestamp",
                      "scope": 31,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 28,
                        "name": "ElementaryTypeName",
                        "src": "404:4:0"
                      }
                    ],
                    "id": 29,
                    "name": "VariableDeclaration",
                    "src": "404:14:0"
                  }
                ],
                "id": 30,
                "name": "ParameterList",
                "src": "362:57:0"
              }
            ],
            "id": 31,
            "name": "EventDefinition",
            "src": "339:81:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "createDonation",
              "scope": 92,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 32,
                "name": "ParameterList",
                "src": "449:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 33,
                "name": "ParameterList",
                "src": "469:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_6b5cb002bb53552027f5b3f0818364e2bd9659372781260f02b63c43ccc63d0e",
                                  "typeString": "literal_string \"Le montant de la donation doit etre superieur a zero\""
                                }
                              ],
                              "overloadedDeclarations": [
                                110,
                                111
                              ],
                              "referencedDeclaration": 111,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 34,
                            "name": "Identifier",
                            "src": "479:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 107,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 35,
                                    "name": "Identifier",
                                    "src": "487:3:0"
                                  }
                                ],
                                "id": 36,
                                "name": "MemberAccess",
                                "src": "487:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 37,
                                "name": "Literal",
                                "src": "499:1:0"
                              }
                            ],
                            "id": 38,
                            "name": "BinaryOperation",
                            "src": "487:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4c65206d6f6e74616e74206465206c6120646f6e6174696f6e20646f69742065747265207375706572696575722061207a65726f",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Le montant de la donation doit etre superieur a zero\"",
                              "value": "Le montant de la donation doit etre superieur a zero"
                            },
                            "id": 39,
                            "name": "Literal",
                            "src": "502:54:0"
                          }
                        ],
                        "id": 40,
                        "name": "FunctionCall",
                        "src": "479:78:0"
                      }
                    ],
                    "id": 41,
                    "name": "ExpressionStatement",
                    "src": "479:78:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct Donation.DonationStruct storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Donation.DonationStruct storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14,
                                  "type": "mapping(uint256 => struct Donation.DonationStruct storage ref)",
                                  "value": "donations"
                                },
                                "id": 42,
                                "name": "Identifier",
                                "src": "568:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 21,
                                  "type": "uint256",
                                  "value": "nextId"
                                },
                                "id": 43,
                                "name": "Identifier",
                                "src": "578:6:0"
                              }
                            ],
                            "id": 44,
                            "name": "IndexAccess",
                            "src": "568:17:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct Donation.DonationStruct memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10,
                                  "type": "type(struct Donation.DonationStruct storage pointer)",
                                  "value": "DonationStruct"
                                },
                                "id": 45,
                                "name": "Identifier",
                                "src": "588:14:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 21,
                                  "type": "uint256",
                                  "value": "nextId"
                                },
                                "id": 46,
                                "name": "Identifier",
                                "src": "603:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 107,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 47,
                                    "name": "Identifier",
                                    "src": "611:3:0"
                                  }
                                ],
                                "id": 48,
                                "name": "MemberAccess",
                                "src": "611:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 107,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 49,
                                    "name": "Identifier",
                                    "src": "623:3:0"
                                  }
                                ],
                                "id": 50,
                                "name": "MemberAccess",
                                "src": "623:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 97,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 51,
                                    "name": "Identifier",
                                    "src": "634:5:0"
                                  }
                                ],
                                "id": 52,
                                "name": "MemberAccess",
                                "src": "634:15:0"
                              }
                            ],
                            "id": 53,
                            "name": "FunctionCall",
                            "src": "588:62:0"
                          }
                        ],
                        "id": 54,
                        "name": "Assignment",
                        "src": "568:82:0"
                      }
                    ],
                    "id": 55,
                    "name": "ExpressionStatement",
                    "src": "568:82:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (uint256) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 19,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "donateurToDonations"
                                    },
                                    "id": 56,
                                    "name": "Identifier",
                                    "src": "660:19:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 107,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 57,
                                        "name": "Identifier",
                                        "src": "680:3:0"
                                      }
                                    ],
                                    "id": 58,
                                    "name": "MemberAccess",
                                    "src": "680:10:0"
                                  }
                                ],
                                "id": 59,
                                "name": "IndexAccess",
                                "src": "660:31:0"
                              }
                            ],
                            "id": 60,
                            "name": "MemberAccess",
                            "src": "660:36:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "uint256",
                              "value": "nextId"
                            },
                            "id": 61,
                            "name": "Identifier",
                            "src": "697:6:0"
                          }
                        ],
                        "id": 62,
                        "name": "FunctionCall",
                        "src": "660:44:0"
                      }
                    ],
                    "id": 63,
                    "name": "ExpressionStatement",
                    "src": "660:44:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 31,
                              "type": "function (uint256,address,uint256,uint256)",
                              "value": "DonationEffectuee"
                            },
                            "id": 64,
                            "name": "Identifier",
                            "src": "720:17:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "uint256",
                              "value": "nextId"
                            },
                            "id": 65,
                            "name": "Identifier",
                            "src": "738:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 107,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 66,
                                "name": "Identifier",
                                "src": "746:3:0"
                              }
                            ],
                            "id": 67,
                            "name": "MemberAccess",
                            "src": "746:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 107,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 68,
                                "name": "Identifier",
                                "src": "758:3:0"
                              }
                            ],
                            "id": 69,
                            "name": "MemberAccess",
                            "src": "758:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 97,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 70,
                                "name": "Identifier",
                                "src": "769:5:0"
                              }
                            ],
                            "id": 71,
                            "name": "MemberAccess",
                            "src": "769:15:0"
                          }
                        ],
                        "id": 72,
                        "name": "FunctionCall",
                        "src": "720:65:0"
                      }
                    ],
                    "id": 73,
                    "name": "EmitStatement",
                    "src": "715:70:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "uint256",
                              "value": "nextId"
                            },
                            "id": 74,
                            "name": "Identifier",
                            "src": "796:6:0"
                          }
                        ],
                        "id": 75,
                        "name": "UnaryOperation",
                        "src": "796:8:0"
                      }
                    ],
                    "id": 76,
                    "name": "ExpressionStatement",
                    "src": "796:8:0"
                  }
                ],
                "id": 77,
                "name": "Block",
                "src": "469:342:0"
              }
            ],
            "id": 78,
            "name": "FunctionDefinition",
            "src": "426:385:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getDonationsByDonateur",
              "scope": 92,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_donateur",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 79,
                        "name": "ElementaryTypeName",
                        "src": "849:7:0"
                      }
                    ],
                    "id": 80,
                    "name": "VariableDeclaration",
                    "src": "849:17:0"
                  }
                ],
                "id": 81,
                "name": "ParameterList",
                "src": "848:19:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 82,
                            "name": "ElementaryTypeName",
                            "src": "891:4:0"
                          }
                        ],
                        "id": 83,
                        "name": "ArrayTypeName",
                        "src": "891:6:0"
                      }
                    ],
                    "id": 84,
                    "name": "VariableDeclaration",
                    "src": "891:13:0"
                  }
                ],
                "id": 85,
                "name": "ParameterList",
                "src": "890:15:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 85
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "mapping(address => uint256[] storage ref)",
                              "value": "donateurToDonations"
                            },
                            "id": 86,
                            "name": "Identifier",
                            "src": "923:19:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "address",
                              "value": "_donateur"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "943:9:0"
                          }
                        ],
                        "id": 88,
                        "name": "IndexAccess",
                        "src": "923:30:0"
                      }
                    ],
                    "id": 89,
                    "name": "Return",
                    "src": "916:37:0"
                  }
                ],
                "id": 90,
                "name": "Block",
                "src": "906:54:0"
              }
            ],
            "id": 91,
            "name": "FunctionDefinition",
            "src": "817:143:0"
          }
        ],
        "id": 92,
        "name": "ContractDefinition",
        "src": "52:910:0"
      }
    ],
    "id": 93,
    "name": "SourceUnit",
    "src": "26:937:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xd353D5cbBf281F3d3B0A3D3dECf1305157Bd3B9d",
      "transactionHash": "0xe72f8173035ec811f44f29d5d61cf7f4f701b7a2a8d5ccb81c82040fcfa24508"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2024-07-04T14:58:18.157Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
};

let web3;
let contract;

window.addEventListener('load', async () => {
    await initWeb3();
    await initContract();
    await loadDonations();

    document.getElementById('donationForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        await createDonation();
    });
});

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        alert("You need to install MetaMask to use this DApp!");
    }
}

async function initContract() {
    contract = new web3.eth.Contract(contractABI, contractAddress);
}

async function createDonation() {
    const amount = document.getElementById('amount').value;
    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.createDonation().send({ from: accounts[0], value: web3.utils.toWei(amount, 'wei') });
        document.getElementById('message').textContent = `Donation de ${amount} Wei effectuée avec succès`;
        document.getElementById('message').classList.remove('hidden');

        // Add the new donation to the table immediately
        const donationCount = await contract.methods.donationCount().call();
        const newDonation = await contract.methods.donations(donationCount).call();
        addDonationToTable(newDonation);
    } catch (error) {
        console.error("Error creating donation", error);
    }
}

async function loadDonations() {
    try {
        const donationCount = await contract.methods.donationCount().call();
        const donationList = document.getElementById('donationList');
        donationList.innerHTML = '';

        for (let i = 1; i <= donationCount; i++) {
            const donation = await contract.methods.donations(i).call();
            addDonationToTable(donation);
        }
    } catch (error) {
        console.error("Error loading donations", error);
    }
}

function addDonationToTable(donation) {
    const donationList = document.getElementById('donationList');
    const listItem = document.createElement('tr');
    listItem.innerHTML = `<td>${donation.donateur}</td><td>${web3.utils.fromWei(donation.montant, 'wei')}</td><td>${new Date(donation.timestamp * 1000).toLocaleString()}</td>`;
    donationList.appendChild(listItem);
}