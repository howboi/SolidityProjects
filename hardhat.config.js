require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20", // 根據你的合約版本調整
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID", // 替換為你的節點提供者 URL
      accounts: ["YOUR_PRIVATE_KEY"] // 替換為你的錢包私鑰
    }
  }
};
