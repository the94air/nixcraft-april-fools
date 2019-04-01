function blockRequest(details) {
	return {
		cancel: true
	};
}

function updateFilters(urls) {
	chrome.webRequest.onBeforeRequest.addListener(
		blockRequest,
		{
			urls: urls,
		},
		['blocking']
	);

	chrome.webNavigation.onErrorOccurred.addListener(function (details) {
		chrome.tabs.update(details.tabId, {
		    url: chrome.extension.getURL("pranked.html")
		});
	}, {url: [{hostSuffix: 'cyberciti.biz'},]});
}

updateFilters(["*://*.cyberciti.biz/*"]);
