var pattern = "https://*.undercards.net/*";
var targetUrl = "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  console.info(requestDetails.url);
  if (requestDetails.url == "https://undercards.net/images/cards/Killer_Cook.png") {
    return {
        redirectUrl: "Https://undercards.net/images/cards/Ultimate_Recipe.png"
      };
  }
  return;
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
