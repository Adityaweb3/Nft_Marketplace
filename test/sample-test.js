const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("NFTMarket", function () {
  it("Should create and executes market sales" , async function() {
    const Market = await ethers.getContractFactory("NFTMarket") 
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address ;

    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed() 
    const nftContractAddress = nft.address 

    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')

    await nft.createToken("https://airnfts.s3.amazonaws.com/nft-images/20210905/Crypto_Ape_Nft_1630843973857.jpg")
    await nft.createToken("https://1stmint.io/wp-content/uploads/2021/05/ape1-768x773.jpg")

    await market.createMarketItem(nftContractAddress, 1, auctionPrice, {value : listingPrice})
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, {value : listingPrice})

    const [_, buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {value :
    auctionPrice})

    let items = await market.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price : i.price.toString(),
        tokenId : i.tokenId.toString(),
        seller : i.seller ,
        owner : i.owner ,
        tokenUri
      }
      return item
    }))
    console.log('items : ', items)




  });
  
});
