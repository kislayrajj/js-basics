// const card = document.querySelector(".card");
// card.addEventListener("click", function () {
//     console.log("जय श्री राम");
// });
const cardContainer = document.querySelector(".container");

let cardNumber = 0;
const createNewCard = () => {
  cardNumber++;
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.id = `${cardNumber}`;
  newCard.innerHTML = `${cardNumber}`;
  //   cardContainer.appendChild(newCard);
  cardContainer.insertBefore(newCard, addCard); // inserts new card  before the add card, ie keeping add card at the end

  // delete card
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Del';
  deleteButton.setAttribute("title","Delete")
  deleteButton.classList.add("delete-button");
  newCard.append(deleteButton)
  // deleteButton.addEventListener('click', ()=>{
  //   newCard.remove();
  // })

};

const addCard = document.querySelector(".add-card");
addCard.addEventListener("click", createNewCard);


// event delegation, instead of giving each card eventListener , just create a separate event that does the job. better performance
cardContainer.addEventListener("click",(e)=>{
  console.log(e.target)
  if(e.target.classList.contains('delete-button')){
    e.target.parentElement.remove();
  }
  
})