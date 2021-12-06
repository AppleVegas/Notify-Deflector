var s = document.createElement('script');
s.textContent = "Notification = {}; Notification.requestPermission = function(cb) { cb('granted'); return new Promise(function(resolve, reject) { resolve('granted') });}; Notification.permission = 'granted'; console.log('Disabling notification requests.');";
(document.head||document.documentElement).appendChild(s);
s.remove();
