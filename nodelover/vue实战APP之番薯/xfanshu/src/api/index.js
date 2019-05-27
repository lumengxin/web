// var AV = require('leancloud-storage');

// var APP_ID = 'lBwtXSJwW8elq4hPi1b5Q7RI-gzGzoHsz';
// var APP_KEY = '3wmTVVhUBTWbATScQXpR7URe';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });
 import AV from 'leancloud-storage'

 const appId = 'lBwtXSJwW8elq4hPi1b5Q7RI-gzGzoHsz';
 const appKey = '3wmTVVhUBTWbATScQXpR7URe';
 AV.init({ appId, appKey });

 export default { SDK: AV };