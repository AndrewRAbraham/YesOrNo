//var currentLocation = window.location;

console.log(typeof $);










/*currentLocation.
var actualCode = '(' + function() {
    // All code is executed in a local scope.
    // For example, the following does NOT overwrite the global `alert` method
    var alert = null;
    // To overwrite a global variable, prefix `window`:
    window.alert = null;
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
