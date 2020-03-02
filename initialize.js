const shoppinglist = new ShoppingList();
const dom = new DomManipulator();
const addButton = document.getElementById("addButton");

// let items = [{
//     id: 1,
//     name: "Milk",
//     done: false
// },
// {
//     id: 2,
//     name: "Nuts",
//     done: true
// },
// ];

// dom.appendListItems(items);
addButton.onclick = () => {dom.addNewItemToPage(shoppinglist)};