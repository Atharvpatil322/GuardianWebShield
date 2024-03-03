// Define defaultFilters array with URL patterns
const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
];

// Function to add event listener with defaultFilters
function addListenerWithDefaultFilters(defaultFilters) {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return { cancel: true }; },
        { urls: defaultFilters },
        ["blocking"]
    );
}

// Event listener to wait for extension to fully load
chrome.runtime.onInstalled.addListener(function() {
    // Call the function with defaultFilters as parameter
    addListenerWithDefaultFilters(defaultFilters);
});





// "permissions": This lists the permissions required by the extension. In this case, it requires access to web requests ("webRequest"), the ability to block web requests ("webRequestBlocking"), and permission to access all URLs ("<all_urls>").

// "background": Specifies a background script ("background.js") that runs in the background and handles events or tasks for the extension.


// This code snippet adds an event listener to the chrome.webRequest.onBeforeRequest event. When a web request is about to be made, the function provided as the first argument is executed. This function takes details as a parameter, representing information about the request.

// In this specific example, the function returns an object with the property cancel set to true, effectively blocking the request.

// The second argument { urls: defaultFilters } specifies the URLs that the listener should apply to. defaultFilters likely contains an array of URL patterns.

// The third argument ["blocking"] indicates that the listener operates in "blocking" mode, meaning it has the ability to block requests.