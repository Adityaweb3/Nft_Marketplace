
require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks : {
    hardhat : {
      chainId : 1337
    },
    
    mumbai :{
      url: "https://polygon-mumbai.g.alchemy.com/v2/QvI0ZSkGbmLxFxKdKGNEl5BHqglIOGSF" ,
      accounts : [privateKey]

    }

    

  },
  solidity: "0.8.4",
};
