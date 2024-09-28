// // keyboard events
// const keyboard = document.querySelector(".keyboard_evt");

// // keyboard.addEventListener("keydown",(e)=>{
// //     console.log(e.key)
// //     // console.log("clicked")
// // })

// window.addEventListener("keydown", (e) => {
//   console.log("key value : ", e.key);
//   console.log("key code : ", e.code);
// });

// mouse events

const mouseContainer = document.querySelector(".mouse");
//mouseenter

// mouseContainer.addEventListener("mouseenter",(e)=>{
//     console.log(e)
// }) // mouseenter triggers only once as it enter the target element

//mouseover

// mouseContainer.addEventListener("mouseover",(e)=>{
//     console.log(e.type)
// }) // mouseover triggers multiple times, ie, as it moves over target element and its children

// mouseleave

// mouseContainer.addEventListener("mouseleave",(e)=>{
//     console.log(e.type)
// }) // fire only once as leave the target element , no its children


// mouseout

// mouseContainer.addEventListener("mouseout",(e)=>{
//     console.log(e.type)
// }) // fire multiple times as it leave the target element and its children
  

//click
// mouseContainer.addEventListener("click",(e)=>{
//     console.log(e.type)
// }) // fire on full click action, ie pressed down and released




// mousedown

// mouseContainer.addEventListener("mousedown",(e)=>{
//     console.log(e.type)
// }) // fire when mouse button is pressed , without needing the release

// mouseup

// mouseContainer.addEventListener("mouseup",(e)=>{
//     console.log(e.type)
// }) // fire when mouse button is released


// mousemove

// mouseContainer.addEventListener("mousemove",(e)=>{
//     console.log(e.type)
// }) // fire when mouse button is released


// mouse wheel event 

// mouseContainer.addEventListener("wheel",(e)=>{
//     console.log(e.type)
// }) // fire on mouse wheel


//ui event

// scroll 

// document.addEventListener("scroll",(e)=>{
//     console.log(e)
// }) // fire only if there is scroll

// touchstart 

// mouseContainer.addEventListener("touchstart",(e)=>{
//     console.log(e.type)
// }) // fire on touch, works on touch screen only

// touchend

// mouseContainer.addEventListener("touchend",(e)=>{
//     console.log(e.type)
// }) // fire on touch remove ie when touch is removed like mouseleave, works on touch screen only


// touchmove

// mouseContainer.addEventListener("touchmove",(e)=>{
//     console.log(e.type)
// }) // fire when touch is moved , works on touch screen only


// Event bubbling and Event Capturing

// stopping event propagation

// const blue = document.querySelector(".blue")
// const pink = document.querySelector(".pink")
// const green = document.querySelector(".green")
// blue.addEventListener("click",(e)=>{
//     console.log("blue clicked")
// },{capture:true})

// pink.addEventListener("click",(e)=>{
//     // e.stopPropagation() // stops event from bubbling up
//     console.log("pink clicked")
// },{capture:true})
// green.addEventListener("click",(e)=>{
//     e.stopPropagation()

//     console.log("green clicked")
// },{capture:true, once:true}) // capture true makes events captures that is opposite of bubbling & once true make events works only once on the targeted element 

// // by default capture and once is false


// event simulator
// click()
// focus()
// blur()
// submit()
// reset()

// clear interval
// let count =1 ;

// const intervalId = setInterval(() => {
//     if(count >=100){
//         clearInterval(intervalId)
//     }
//     count++
//     console.log("hi")
// }, 10); 