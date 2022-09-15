//save the input into an array or something ( your model ) 
//const myTodoItems = ["wash the car", "learn JavaScript", "don't do any CSS"]
const todoItems = []

//select the input tag from your javascript (querySelector)
const input = document.querySelector("input")
const list = document.querySelector("#listItems")

//delete item
function deleteItem(i) {
    todoItems.splice(i, 1)
    render() 
} 

//listen to the input tag variable ( add an eventListener ) 
//for when the user hits the "Enter" key hint "keyup" event.key === "Enter"
input.addEventListener("keyup", function(send) {
    if (send.key === "Enter") {
        const newInput = {
            done: false,
            text: input.value
        }
        todoItems.unshift(newInput)
        input.value = ""
        render()
    }
})

function toggleDone(i) {
    todoItems[i].done = !todoItems[i].done
    render()
}


function render() {
    const newRender = todoItems
    .map((item, i) => `<li>${item.text}</li>
    <button onclick="deleteItem(${i})">🗑</button>
    <button onclick="toggleDone(${i})">${item.done ? "✅" : "⛔️"}</button>
    `)
    .join("")
    list.innerHTML = newRender
}

render()