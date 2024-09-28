const dogImage = document.querySelector(".dog-img");
const nextBtn = document.querySelector(".next-dog-img-btn");
dogImage.style.cssText = `
    max-width: 90vw;
    max-height: 70vh;
  display : block;
  margin: 10px;
  `;
const fetchRandomDogImg = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dogImage.src = json.message; 
    });
};

// // using XMLHttpRequest
// //used before fetch came (2015)

// const fetchRandomDogImg = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GEt", "https://dog.ceo/api/breeds/image/random");

//   xhr.responseType = "json"; // or use JSON.parse instead
//   xhr.send();

//   // load event
//   xhr.addEventListener("load", () => {
//     // const jsonResponse = JSON.parse(xhr.response);
//     // const imageUrl = jsonResponse.message;
//     const imageUrl = xhr.response.message;
//     dogImage.src = imageUrl;
//     console.log("xhr : ", xhr);
//   });

//   //direct assignment i.e. here fn assignment, using onload
//   // xhr.onload = () => {
//   //   const imageUrl = xhr.response.message;
//   //   dogImage.src = imageUrl;
//   //   console.log("xhr : ", xhr);
//   // };
// };
fetchRandomDogImg();

nextBtn.addEventListener("click", fetchRandomDogImg);
