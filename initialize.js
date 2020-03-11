
const app = new App();

document.querySelector('body').addEventListener('click', function (event) {
    switch (event.target.id) {
        case 'doneButton':
            app.markItemAsDone(event);
            break;
        case 'addButton':
            app.addNewItemToPage();
            break;
    }
});