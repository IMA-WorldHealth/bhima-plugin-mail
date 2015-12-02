module.exports = {
  'emails' : [
  {
   'name' : 'daily',
    //'frequency' : '*/1 * * * *', //(for test) 
    'frequency' : '0 19 * * *', 
    'addressList' : 'test'
  }, 
  {
    'name' : 'weekly',
    // 'frequency' : '*/1 * * * *', //(for test) 
    'frequency' : '0 20 * * 0',
    'addressList' : 'test'
  }, 
  {
    'name' : 'monthly',
     // 'frequency' : '*/1 * * * *', //(for test) 
    'frequency' : '0 21 28-31 * *',
    'addressList' : 'test'
  }]
}