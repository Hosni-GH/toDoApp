var itemNumber = 1;

function addItem() {
    var toDoItem = document.getElementById("add-to-do-input").value
    var newItem = document.createElement("li");
    var myList = document.getElementById("my-to-do-List");
    newItem.setAttribute('class', "items item" + itemNumber);
    newItem.innerHTML = "<button id='btn-complete" + itemNumber + "'>Complete</button><button id='btn-delete" + itemNumber + "'>Delete</button><span id='to-do-item" + itemNumber + "'> " + toDoItem + "</span>";
    myList.insertBefore(newItem, myList.childNodes[0]);
    document.getElementById("btn-delete" + itemNumber).addEventListener("click", deleteItem);
    document.getElementById("btn-complete" + itemNumber).addEventListener("click", completeItem);
    itemNumber++;

}
function deleteItem() {
    var x = document.activeElement.id;
    var indexDelete = parseInt(x[(x.length) - 1]);
    var qSelector=".item"+indexDelete;
    var second = document.querySelector(qSelector);
    second.remove();
}
function completeItem(){   
   var y = document.activeElement.id;
    var indexLineThrough = parseInt(y[(y.length) - 1]);
    var q1Selector="#to-do-item"+indexLineThrough;
    var lineThrough = document.querySelector(q1Selector);
    lineThrough.classList.toggle("iscompleted");

}
document.getElementById("add-btn").addEventListener("click", addItem);