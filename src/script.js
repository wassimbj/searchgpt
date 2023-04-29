const url = new URL(window.location);
// only run the script if we are on the chatgpt page
if (url.host === "chat.openai.com") {
	// wait for the page to load, 500ms seems to be enough, it depends on your internet connection
	setTimeout(() => {
		console.log("SearchGPT is working here 🤖")
		var searchParams = new URLSearchParams(url.search);
		var query = searchParams.get("_s");
		if (!!query) {
			const textarea = document.querySelector("form textarea");
			const submitBtn = document.querySelector("form button");
			textarea.value = query;
			submitBtn.removeAttribute("disabled");
			submitBtn.click();
		}
	}, 600)
}
