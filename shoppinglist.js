"use strict";

const addButton = document.getElementById("addButton");
const itemInput = document.getElementById("addInput");


let items = [{
    id: 1,
    name: "Milk",
    done: false
},
{
    id: 2,
    name: "Nuts",
    done: false
},
];

class ShoppingList {
    constructor() {
        this.ShoppingList = [];
    }

    addItem(item) {
        this.ShoppingList.push(item);
    }

    removeItem(item) {
        this.ShoppingList = this.ShoppingList.filter(function (element) {
            return element != item;
        });
    }

    getItems() {
        return this.ShoppingList;
    }

    toggleDone(item) {
        let index = this.getItems().indexOf(item);
        this.ShoppingList[index].done = !this.ShoppingList[index].done;
    }
}

class DomManipulator {
    constructor() {
        this.DomManipulator = [];
        const itemList = document.getElementById("itemList");
    }

    appendItem(item) {
        let newItem = document.createElement("div");
        newItem.id = "item_" + item.id;
        if (item.done) {
            newItem.style = "text-decoration:line-through";
            newItem.className = "ui secondary segment";
        } else {
            newItem.className = "ui segment";
        }
        newItem.innerText = item.name;
        itemList.append(newItem);
    }

    removeItem(id) {
        let item = document.getElementById(id);
        item.remove();
    }

    setItemAsDone(id) {
        let item = document.getElementById(id);
        item.style = "text-decoration:line-through";
        item.className = "ui secondary segment";
    }

    appendListItems(items) {
        for (const item of items) {
            this.appendItem(item);
        }
    }

    addNewItemToPage(itemList) {
        let itemText = itemInput.value;
        
        if (itemText) {
            let id = itemList.getItems().length + 1;
            let item = {id: 0, name: itemText, done: false};
            itemList.addItem(item);
            this.appendItem(item);
            itemInput.value = "";
        }
    }
}
