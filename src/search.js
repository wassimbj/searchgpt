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

var searchParams = new URLSearchParams(url.search);
var query = searchParams.get("_s");
if (query) {
   const textarea = document.querySelector("form textarea");
   setNativeValue(textarea, query);
   textarea.dispatchEvent(new Event('input', { bubbles: true }));
   const submitBtn = document.querySelector("form button");
   // textarea.value = query;
   submitBtn.removeAttribute("disabled");
   submitBtn.click();
}
