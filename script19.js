//  task 1
// let input = document.querySelector("#search")
// let list = document.querySelectorAll("li")
// let p = document.querySelector("#filmsCount")

// let search = input.addEventListener("input", function (event) {
//   let filtered = Object.values(list).filter((li) =>
//     li.textContent.includes(input.value)
//   )
//   return (p.textContent = filtered.length)
// })

const INGREDIENTS = {
  cocoa: ["cocoa powder", "milk", "sugar"],
  cappuccino: ["milk", "coffee"],
  smoothie: ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"],
}

let ul = document.querySelector("#menu")

ul.addEventListener("click", function (event) {
  if (INGREDIENTS[event.target.textContent]) {
    let ol = document.createElement("ol")
    let arr = INGREDIENTS[event.target.textContent]
    arr.forEach(function (item) {
      let li = document.createElement("li")
      li.textContent = item
      ol.append(li)
    })
    event.target.append(ol)
    ul.addEventListener("click", function (event) {
      ol.remove()
    })
  }
})
