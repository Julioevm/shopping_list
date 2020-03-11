"use strict";

const ITEM_ = "item_";
const LINE_THROUGH_STYLE = "text-decoration:line-through"
const ITEM_SEGMENT = "ui clearing segment";
const ITEM_SECONDARY_SEGMENT = "ui clearing secondary segment";
const BUTTON_STYLE = "ui right floated mini button";
const BUTTON_DELETE_ID = "deleteButton";
const BUTTON_DONE_ID = "doneButton";
const DONE = "Done";
const X = "X";

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

    toggleDone(itemId) {
        let index = this.getItems().findIndex(x => x.id == itemId);
        this.ShoppingList[index].done = !this.ShoppingList[index].done;
    }
}

class DomManipulator {
    constructor() {
        const itemList = document.getElementById("itemList");
    }

    getNewItem(item) {
        let newItem = document.createElement("div");

        newItem.id = ITEM_ + item.id;

        if (item.done) {
            newItem.style = LINE_THROUGH_STYLE;
            newItem.className = ITEM_SECONDARY_SEGMENT;
        } else {
            newItem.className = ITEM_SEGMENT
        }
        newItem.innerText = item.name;
        return newItem;
    }

    getDoneButton() {
        let doneButton = document.createElement("button");
        doneButton.id = BUTTON_DONE_ID;
        doneButton.className = BUTTON_STYLE;
        doneButton.innerText = DONE;
        return doneButton;
    }

    getDeleteButton() {
        let deleteButton = document.createElement("button");
        deleteButton.id = BUTTON_DELETE_ID;
        deleteButton.className = BUTTON_STYLE;
        deleteButton.innerText = X;
        return deleteButton;
    }

    appendItem(item) {
        let newItem = this.getNewItem(item);
        newItem.append(this.getDoneButton());
        newItem.append(this.getDeleteButton());

        itemList.append(newItem);
    }

    removeItem(id) {
        let item = document.getElementById(id);
        item.remove();
    }

    setItemAsDone(id) {
        let item = document.getElementById(id);
        item.style = LINE_THROUGH_STYLE;
        item.className = ITEM_SECONDARY_SEGMENT;
    }

    appendListItems(items) {
        for (const item of items) {
            this.appendItem(item);
        }
    }
}

class App {
    constructor() {
        this.shoppingList = new ShoppingList();
        this.dom = new DomManipulator();
        let self = this;
    }

    addNewItemToPage() {
        const itemInput = document.getElementById("addInput");
        let itemText = itemInput ? itemInput.value : null;

        if (itemText) {
            let itemId = this.shoppingList.getItems().length + 1;
            let item = { id: itemId, name: itemText, done: false };
            this.shoppingList.addItem(item);
            this.dom.appendItem(item);
            itemInput.value = "";
        }
    }

    markItemAsDone(event) {
        const id = event.path[1].id;
        const listId = id.split('_')[1];
        this.shoppingList.toggleDone(listId);
        this.dom.setItemAsDone(id);
    }

    setEvents(){
        let self = this;
        document.querySelector('body').addEventListener('click', function (event) {
                switch (event.target.id) {
                    case 'doneButton':
                        self.markItemAsDone(event);
                        break;
                    case 'addButton':
                        self.addNewItemToPage();
                        break;
                }
            });
        }
}
