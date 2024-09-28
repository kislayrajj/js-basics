const usernameInput = document.querySelector("#username");
const dynamicDiv = document.createElement("div");
document.body.appendChild(dynamicDiv);
usernameInput.addEventListener("input", (e) => {
//   console.log("input event fired : ", event.target.value);
  dynamicDiv.innerText = event.target.value;
});

// changeEvent
// change event fires on blur or when click ENTER 
// let inputValue="tim";
// usernameInput.addEventListener("blur", (e) => {
//   inputValue = e.target.value;
//   console.log(inputValue)
//   console.log(e)
// });


const form = document.querySelector("form")

form.addEventListener("click",(e)=>{
    console.log(e.target) // logs where the click happens ie input,button, form
    console.log(e.currentTarget) // only logs current target ie where the event listener is hooked. in this case logs only form
})