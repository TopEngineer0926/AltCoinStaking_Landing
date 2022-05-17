// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
    }],
  
    // your other plugins here
  
  ]);

module.exports = {
  env: {
    REACT_APP_NFT_ADDRESS: '0xc004b3091e0B92B99a41279ed16d0741Bfd108d8',
    REACT_APP_CHAIN_ID: 80001
  }
}