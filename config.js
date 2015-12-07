module.exports = {
  'emails' : [{
   'name' : 'daily',
    'frequency' : '0 19 * * *',
    'addressList' : 'da'
  }, {
    'name' : 'weekly',
    'frequency' : '0 20 * * 0',
    'addressList' : 'wk'
  }, {
    'name' : 'monthly',
    'frequency' : '0 21 28-31 * *',
    'addressList' : 'mn'
  }]
};
