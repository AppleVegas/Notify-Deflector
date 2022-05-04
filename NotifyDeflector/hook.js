(function(){
let orgNotification = Notification;
let orgSubscribe = PushManager.prototype.subscribe;
let orgPermState = PushManager.prototype.permissionState;

let reqPermHook = function(cb) {
    if (cb)
    {
        cb('granted');
    }
    let p = new Promise(function(resolve, reject) {
         resolve('granted');
    })
    return p;
}

//Trying to fool websites that use push, but that does not seem to work
let FakeSubscription = function(...a){
    this.endpoint = "http://127.0.0.1/"
    this.expirationTime = null
    this.subscriptionId = "lmaorofl"
    this.unsubscribe = function(){
        return new Promise(function(resolve, reject) {
            resolve(true);
        }
    )};
    this.getKey = function() {return {}}
    this.toJSON = function(){return {}}
}

let subscribe = function(...a) {
    return new Promise(function(resolve, reject) {
        resolve(new FakeSubscription(...a));
    });
}

let permissionState = function(){
    return new Promise(function(resolve, reject) {
        resolve('granted');
    });
}

Notification = function() {
    n = new orgNotification(arguments);
    n.onerror = function(){this.onshow()};
    Object.defineProperty(n, "onerror", {writable:false})
    return n;
}; 
Notification.prototype = orgNotification.prototype
for (let key in orgNotification){
    orgNotification[key] = orgNotification[key]
}
Notification.requestPermission = reqPermHook; 
Notification.permission = 'granted'; 

PushManager.prototype.subscribe = subscribe;  
PushManager.prototype.permissionState = permissionState; 
console.log('Notification requests have beed disabled.');
})()