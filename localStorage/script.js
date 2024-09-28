const dynamicName = document.querySelector(".dynamic-name");
const dynamicAge = document.querySelector(".dynamic-age");
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");

// dynamicName.textContent = localStorage.getItem(JSON.parse(JSON.stringify(myData)));

// dynamicAge.textContent = localStorage.getItem("age");

// nameInput.addEventListener("input", (e) => {
//   //   localStorage.name = e.target.value;
//   //   dynamicName.innerText = localStorage.name;

//   //best way (recommended)

//   localStorage.setItem("name", e.target.value);
//   dynamicName.textContent = localStorage.getItem("name");
// });

// const myData = {
//     name:"",
//     age :""
// }
const myData = JSON.parse(localStorage.getItem("myData")) || {}

dynamicName.textContent = myData.name;
dynamicAge.textContent =myData.age
nameInput.addEventListener("input",(e)=>{
    myData.name = e.target.value;
    localStorage.setItem("myData",JSON.stringify(myData));
    dynamicName.textContent = e.target.value;

})

ageInput.addEventListener("input",(e)=>{
    myData.age = e.target.value;
    localStorage.setItem("myData",JSON.stringify(myData));
    dynamicAge.textContent = e.target.value;

})
