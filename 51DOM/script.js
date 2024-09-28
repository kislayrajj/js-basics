// const sayHi = () => {
//   document.body.children[3].src =
//     "https://imgs.search.brave.com/sc5bVV5MPhzt5R2Nsu0rBtZkYV-BZ2vPI9HWndIMr9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9iZWF1dGlmdWwt/YXV0dW1uLW5hdHVy/ZS13aXRoLWEtcml2/ZXItaW4tdGhlLW1p/ZGRsZS1vZi10aGUt/Zm9yZXN0LWZyZWUt/aW1hZ2UuanBlZz93/PTYwMCZxdWFsaXR5/PTgw";
// };

// const tags = document.querySelectorAll(".css-image");
// console.log(tags)
// const hi = document.getElementsById

// const anchorTags = document.querySelectorAll("a");
// console.log(anchorTags);

// anchorTags.forEach((a) => {
//   // 1
//   // a.style.color = "red"
//   // a.style.color = "red"

//   // 2
//   //     a.style.cssText = `
//   // color : red;
//   // text-decoration-line :none;
//   // font-size : 20px;
//   // font-weight : bold;
//   // font-style : italic;
//   // font-variant : small-caps;
//   // font-family : cursive;
//   //     `

//   //3
//   // a.className= 'custom-link'
// //   a.className = "wavy-link custom-link";

//   //4 best way to style
//   a.classList.add("wavy-link")
// //   a.classList.remove("wavy-link")
// });

// const firstLink = document.querySelector("a")
// console.log(firstLink)
// console.log(firstLink.parentElement.parentElement.previousElementSibling.firstChild)

// const h1 = document.querySelector("h1");
// console.log(h1)
// const h_node = h1.cloneNode(true)
// console.log(h_node)
// const h2 = document.querySelector("h2");
// const body = document.querySelector("body");
// // body.appendChild(h2)
// const h2node = h2.cloneNode(true);

// body.appendChild(h2node); // like copying

// const bodyClone = body.cloneNode(true)
// console.log(bodyClone)
// // h2.appendChild(bodyClone)
// // h2.appendChild(body)
// // body.appendChild(h2)
// body.append("some text", document.createElement("div"))

// createElement

// const newDiv = document.createElement("div")
// newDiv.textContent = "this div is created using createElement"
// newDiv.classList.add("new-div")
// newDiv.id = "firstCustomDiv"
// newDiv.style.cssText = `
// color : red
// `
// document.body.appendChild(newDiv)

for (let i = 0; i <= 100; i++) {
    const boxContainer = document.createElement("div")
    boxContainer.id = `divContainer-${i+1}`;

  const newDiv = document.createElement("div");
  newDiv.textContent = `This div number is ${i+1}`;
  newDiv.style.cssText = `
color:blue;
font-size: 20px;
text-align:center;
`;
  const newLabelPara = document.createElement("p");
  newLabelPara.textContent = `${i+1}`;
  newLabelPara.style.cssText = `
  color:green;
  font-size: 20px;
  text-align:center;
  `;
  
  boxContainer.append(newDiv, newLabelPara);
  document.body.append(boxContainer);
}

// remove element using javascript
// const removableElement = document.getElementById("divContainer-1");
//best way to remove
// removableElement.remove()
// but storing the removable element will have the data after removing , so better not store and directly delete it

// document.getElementById("divContainer-1").remove()
// // remove like this to avoid storing in variable
// const removableElement = document.getElementById("divContainer-");
// console.log(removableElement) // null


// using removeChild method

// const parentOfRemovableElement= removableElement.parentNode
// parentOfRemovableElement.removeChild(removableElement)

//  or
// removableElement.parentNode.removeChild(removableElement)

// const main = document.querySelector(".main")
// main.remove()
// console.dir(main)
// document.body.append(main)