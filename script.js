var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var userInput=document.getElementById('item');
form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
itemList.addEventListener("click",strikeItem);
function addItem(e){
    e.preventDefault(); /*to avoid Normal submission*/
    if(userInput.value!=='' && userInput.value!==undefined){
      var newItem=userInput.value;
      var a=document.createElement('a');
      a.className="list-group-item list-group-item-action";
      a.id="listItem";
      var checkBox=document.createElement('input');
      checkBox.type="checkbox";
      checkBox.className="strike";
      checkBox.id="close";
      a.appendChild(checkBox);
      var aText=document.createTextNode(newItem);
      a.appendChild(aText);
      var deleteBtn=document.createElement("button");
      deleteBtn.className="btn btn-danger btn-sm float-right delete";
      deleteBtn.appendChild(document.createTextNode('X'));
      a.appendChild(deleteBtn); 
      itemList.appendChild(a);
      userInput.value='';
    }
    else{
      alert("enter a TODO item!!");
    }
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm("Are you sure?")){
      var a=e.target.parentElement;
      itemList.removeChild(a);
    }
  }
}
function strikeItem(e){
  if(e.target.classList.contains('strike')){
    var a=e.target.parentElement;
    a.style.textDecorationLine="line-through";
  }
}
