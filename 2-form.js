import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */console.log("2-form.js");const e={email:"",message:""},t=document.querySelector(".feedback-form"),m=t.querySelector('input[name="email"]'),n=t.querySelector('textarea[name="message"]'),s="feedback-form-state";function r(){localStorage.setItem(s,JSON.stringify(e))}function i(a){const{name:o,value:l}=a.target;e[o]=l.trim(),r()}function c(){const a=localStorage.getItem(s);if(a){const o=JSON.parse(a);e.email=o.email||"",e.message=o.message||"",m.value=e.email,n.value=e.message}}function u(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted formData:",e),e.email="",e.message="",localStorage.removeItem(s),t.reset()}t.addEventListener("input",i);t.addEventListener("submit",u);c();
//# sourceMappingURL=2-form.js.map
