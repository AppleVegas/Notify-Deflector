const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

var s = document.createElement('script');
s.src = chrome.runtime.getURL('/hook.js');
s.onload = function() { this.remove() };

nullthrows(document.head || document.documentElement).appendChild(s);
