const withPWA = require('next-pwa');

module.exports = withPWA({
  assetPrefix: '.',
  pwa: {
    dest: 'public',
    register: false,
  },
});
