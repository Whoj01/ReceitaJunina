const balls = document.querySelectorAll(".ball")
const amount = document.querySelector(".amount")
const ingredients = document.querySelectorAll(".ingredients-amount")

const regexToGetNumber = /\d+/g;

balls.forEach(ball => {
  ball.addEventListener("click", handleClickOnButton)
})

function handleClickOnButton(event) {
  const currentValue = Number(amount.innerHTML)
  const addValue = Number(event.currentTarget.value) 

  if(currentValue <= 1 && addValue === -1) return

  amount.innerHTML = (currentValue + addValue).toString().padStart(2, "0")

  ingredients.forEach(ingredient => {
    let numberOfStringIngredient = Number(ingredient.innerHTML.match(regexToGetNumber)[0])
    let newQuantityIngredient = Number(event.currentTarget.value) + numberOfStringIngredient

    ingredient.innerHTML = ingredient.innerHTML.replace(`${numberOfStringIngredient}`, newQuantityIngredient)
  })
}
