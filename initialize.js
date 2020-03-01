const shoppinglist = new ShoppingList();
const dom = new DomManipulator();
const addButton = document.getElementById("addButton");

dom.appendListItems(items);
addButton.onclick = () => {dom.addNewItemToPage(shoppinglist)};