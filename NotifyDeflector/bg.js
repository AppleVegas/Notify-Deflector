var s = document.createElement('script');
s.textContent = "Notification = {}; Notification.requestPermission = function(cb) { return new Promise(function(resolve, reject) { resolve('granted') });}; Notification.permission = 'granted'; PushManager.prototype.subscribe = function(){ return new Promise(function(resolve, reject) { resolve(new PushSubscription) });}; console.log('Disabling notification requests.'); ";
(document.head||document.documentElement).appendChild(s);
s.remove();
