"use strict";

describe('Testing the functionality of the shopping list', () => {

    let shoppingList,
        item1,
        item2;

    beforeEach(() => {
        shoppingList = new ShoppingList();

        item1 = {
            id: 1,
            name: "Milk",
            done: false
        };

        item2 = {
            id: 2,
            name: "Coco",
            done: true
        };
    });

    it('should add an item', () => {
        shoppingList.addItem(item1);
        expect(shoppingList.getItems().length).toBe(1);
    })

    it('should remove item', () => {
        shoppingList.addItem(item1);
        shoppingList.addItem(item2);
        shoppingList.removeItem(item1);
        expect(shoppingList.getItems().indexOf(item1)).toBe(-1);
    })

    it('should mark item as done', () => {
        shoppingList.addItem(item1);
        shoppingList.toggleDone(item1);
        expect(shoppingList.getItems()[0].done).toBe(true);
    })

    it('should mark item as undone', () => {
        shoppingList.addItem(item2);
        shoppingList.toggleDone(item2);
        expect(shoppingList.getItems()[0].done).toBe(false);
    })
})

describe('Testing the DOM manipulatior', () => {

    const ITEM_ = "item_";
    let dom,
        item,
        shoppingList;

    beforeEach(() => {
        jasmine.getFixtures().fixturesPath = "fixtures/";
        jasmine.getFixtures().load('form.html', 'list.html');
        shoppingList = new ShoppingList();
        dom = new DomManipulator();
        item = {
            id: 1,
            name: "Milk",
            done: false
        };
    });

    it('should have HTML elements present', () => {
        expect($('#addButton')).toBeInDOM();
        expect($('#addInput')).toBeInDOM();
        expect($('#itemList')).toBeInDOM();
    })

    it('should insert new item to the list', () => {
        dom.appendItem(item);
        expect($('#item_' + item.id)[0].innerText).toBe(item.name);
    })

    it('should remove item from the list', () => {
        dom.appendItem(item);
        dom.removeItem(ITEM_ + item.id);
        expect($('#item_' + item.id)[0]).not.toBeInDOM();
    })

    it('should mark item as done', () => {
        dom.appendItem(item);
        dom.setItemAsDone(ITEM_ + item.id);
        expect($('#item_' + item.id)[0]).toHaveClass("secondary");
    })
})