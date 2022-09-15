//save the input into an array or something ( your model ) 
//const myTodoItems = ["wash the car", "learn JavaScript", "don't do any CSS"]
const todoItems = []

//select the input tag from your javascript (querySelector)
const input = document.querySelector("input")
const list = document.querySelector("#listItems")
const send_button = document.querySelector("#send")

//delete item
function deleteItem() {
    todoItems.splice(0, 1)  
} 

//listen to the input tag variable ( add an eventListener ) 
//for when the user hits the "Enter" key hint "keyup" event.key === "Enter"
function render(event) {
    if (event.key === "Enter") {
    todoItems.unshift(event.target.value)
//update the HTML on the page to represent the new state of your model 
//( to show the new item in the array on screen).
    listItems.innerHTML += `
    <li>${event.target.value}
    <button onclick="deleteItem()">🗑</button>
    </li>
    `
//empty the HTML input tag so the user can type a new thing in    
    input.value = ""
    }
}

input.addEventListener("keyup", render)