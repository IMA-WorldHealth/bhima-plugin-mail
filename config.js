module.exports = {
  'emails' : [{
    'name' : 'daily',
    'frequency' : '0 18 * * *', 
    'addressList' : 'developers',
  }, {
    'name' : 'weekly',
    'frequency' : '0 19 * * 7',
    'addressList' : 'wk'
  }, {
    'name' : 'monthly',
    'frequency' : '0 20 28-31 * *',
    'addressList' : 'test'
  }]
};
