

module.exports = {
  networks: {
    mainnet_fork: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "999", // Any network (default: none)
    },
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*" // Match any network id
    // },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}