var pattern = "https://*.undercards.net/*";
var targetUrl = "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  console.info(requestDetails.url);
  if (requestDetails.url == "https://undercards.net/images/cards/Killer_Cook.png") {
    return {
        redirectUrl: "https://undercards.net/images/cards/Ultimate_Recipe.png"
      };
  }
  else if (requestDetails.url == "https://undercards.net/images/cards/Sans.png") {
    return {
        redirectUrl: "https://undercards.net/images/cards/Final_Attack.png"
      }; 
  }
  else if (requestDetails.url == "https://undercards.net/images/cards/Gerson.png") {
      return {
          redirectUrl: "https://undercards.net/images/cards/Gem_Specialist.png"
      };
  }
  else if (requestDetails.url == "https://undercards.net/images/cards/Mad_Dummy.png") {
      return {
          redirectUrl: "https://undercards.net/images/cards/Foolish.png"
      };
  }
  else if (requestDetails.url == "https://undercards.net/images/cards/Gaster.png") {
        return {
            redirectUrl: "https://undercards.net/images/cards/Message_from_the_Void.png"
        };}
    else if (requestDetails.url == "https://undercards.net/images/cards/Asriel_Dreemurr.png") {
        return {
            redirectUrl: "https://undercards.net/images/cards/Cute_Dictator.png"
        };}
    else if (requestDetails.url == "https://undercards.netimages/cards/Gift.png") {
        return {
            redirectUrl: "https://undercards.net/images/cards/Your_Lucky_Day.png"
        };
    }
  else return;
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
