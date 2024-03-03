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
