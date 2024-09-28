const resolveBtn = document.querySelector(".resolve_btn");
const rejectBtn = document.querySelector(".reject_btn");
const resetBtn = document.querySelector(".reset_btn");
resetBtn.addEventListener("click", () => window.location.reload());
const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
});

p.then((data) => {
  // .then itself return a promise
  console.log(data, p);
})
  .catch((err) => {
    console.log(err, p);
  })
  .finally(() => {
    console.log("promise settled"); // finally always runs either promise being resolved or rejected ie. after being settled (not pending)
  });

// const makeHttpRequest = (method, url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   const promise = new Promise((resolve, reject) => {
//     xhr.addEventListener("load", () => {
//       resolve(xhr.response);
//     });
//     xhr.addEventListener("error", () => {
//       reject("request failed");
//     });
//   });

//   xhr.open(method, url);
//   xhr.send();
//   return promise;
// };

// using promises resolves callback hell problem
// makeHttpRequest("GET", "http://dummyjson.com/users")
//   .then((userData) => {
//     console.log(userData);
//     return makeHttpRequest(
//       "GET",
//       `http://dummyjson.com/posts/user/${userData.users[0].id}`
//     );
//   })
//   .then((postData) => console.log(postData))
//   .catch((error) => console.log(error));

// -----------FETCH -------------
// fetch is a built-in function that returns a Promise
// fetch returns a Response object which is a promise
// Response object has a json() method that returns a Promise that resolves to a JavaScript object
// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// specifying method and body
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
