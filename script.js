var input = document.getElementById("input");
var lists = document.getElementById("lists");

input.addEventListener("keyup", addList);

function addList(){
  if(event.key === "Enter"){
    addItem();
  }
}

function addItem(){
  var list = document.createElement("li");
  lists.appendChild(list);
  list.innerHTML = input.value;;
  input.value="";
  list.style.fontSize = "1.5rem";
  list.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
  })
  list.addEventListener("mouseenter", () => {
    list.style.cursor = "default";
  })
}
// setInterval(show, 5000)
// var listed = document.getElementsByTagName("li");
// listed.addEventListener("click", lineThrough);

