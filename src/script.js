const url = new URL(window.location);
function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}


// only run the script if we are on the chatgpt page
if (url.host === "chat.openai.com") {
	// wait for the page to load, 600ms seems to be enough, it depends on your internet connection
	setTimeout(() => {
		console.log("SearchGPT is working here 🤖")
		var searchParams = new URLSearchParams(url.search);
		var query = searchParams.get("_s");
		if (!!query) {
			const textarea = document.querySelector("form textarea");
			setNativeValue(textarea, query);
			textarea.dispatchEvent(new Event('input', { bubbles: true }));
			const submitBtn = document.querySelector("form button");
			// textarea.value = query;
			submitBtn.removeAttribute("disabled");
			submitBtn.click();
		}
	}, 600)
}
