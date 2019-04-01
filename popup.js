function prank() {
	chrome.tabs.executeScript({
		file: 'prank.js'
	});
}

if(document.getElementById('prank') != null) {
	document.getElementById('prank').addEventListener('click', prank);
}
