if ("browserAction" in browser) {
  browser.browserAction.onClicked.addListener(async () => {
    browser.tabs.create({ url: "apis.html" });
  });
} else {
  browser.tabs.create({ url: "apis.html" });
}
