require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            forking: {
                url: process.env.BNB_RPC_URL,
            },
        },
        bsc: {
            url: process.env.BNB_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    bscscan: {
        apiKey: process.env.BSCSCAN_API_KEY,
        customChains: [
            {
                network: "bsc",
                chainId: 56,
                urls: {
                    apiURL: "https://api.bscscan.com/api",
                    browserURL: "https://bscscan.com/",
                },
            },
        ],
    },
}
