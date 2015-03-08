var Cylon = require('cylon');

Cylon.robot({
  connections: {
    galileo: { adaptor: 'intel-iot' }
  },

  devices: {
    relay1: { driver: 'led', pin: 4 },
    relay2: { driver: 'led', pin: 5 }
  },

  work: function(my) {
    every((1).second(), my.relay1.toggle);
    every((2).second(), my.relay2.toggle);
  }
}).start();
