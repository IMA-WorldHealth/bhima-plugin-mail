module.exports = {
  'emails' : [{
    'name' : 'daily',
    'frequency' : '*/2 * * * *', //(for test) 
    // 'frequency' : '0 18 * * *', 
    'addressList' : 'test'
  }, {
    'name' : 'weekly',
    // 'frequency' : '*/1 * * * *', //(for test) 
    'frequency' : '0 19 * * 7',
    'addressList' : 'test'
  }, {
    'name' : 'monthly',
     // 'frequency' : '*/3 * * * *', //(for test) 
    'frequency' : '0 20 28-31 * *',
    'addressList' : 'test'
  }]
}