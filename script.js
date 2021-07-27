var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var userInput=document.getElementById('item');
var filter=document.getElementById('filter');
form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
itemList.addEventListener("click",strikeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault(); /*to avoid Normal submission*/
    if(userInput.value!=='' && userInput.value!==undefined){
      var newItem=userInput.value;
      var a=document.createElement('a');
      a.className="list-group-item list-group-item-action";
      a.id="listItem";
      var aText=document.createTextNode(newItem);
      a.appendChild(aText);
      var checkBox=document.createElement('input');
      checkBox.type="checkbox";
      checkBox.className="strike float-right ml-2 checkbox-lg";
      checkBox.id="close";
      a.appendChild(checkBox);
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

function filterItems(e){
	var text=e.target.value.toLowerCase();
	//  var items=document.getElementsByTagName('a');
  var items=itemList.getElementsByTagName('a');
   console.log(items);
	 Array.from(items).forEach(function(item){
	 	var itemName = item.firstChild.textContent;
		 console.log(itemName);
	 	if(itemName.toLowerCase().indexOf(text) != -1){
	 		item.style.display = "block";
	 	}
	 	else{
	 		item.style.display ="none";
	 	}
	})
} 
