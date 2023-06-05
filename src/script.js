const url = new URL(window.location);

// only run the script if we are on the chatgpt page
if (url.host === "chat.openai.com") {
	// wait for the page to load, 600ms seems to be enough, it depends on your internet connection
	setTimeout(() => {
		console.log("SearchGPT is working here 🤖")
		const s = document.createElement('script');
		s.src = chrome.runtime.getURL('search.js');
		s.onload = function () { this.remove(); };
		(document.head || document.documentElement).appendChild(s);
	}, 600)
}
