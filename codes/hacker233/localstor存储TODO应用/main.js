(function() {

    function newFun() {
        var addItems = document.querySelector('.add-items');
        var itemsList = document.querySelector('.plates');
        var buttons = document.querySelector('.buttons');
        var items = JSON.parse(localStorage.getItem('items')) || [];

        function handleSubmit(e) {
            e.preventDefault();
            var name = this.querySelector('[name=item]').value;
            var item = {
                name: name,
                done: false
            };
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
            updateList(items, itemsList);
            this.reset();
        }

        function updateList(plates = [], plateList) {
            plateList.innerHTML = plates.map(function(plate, i) {
                return '<li><input type="checkbox" data-index="' + i +'" id="plate' + i + '" ' + 
                (plate.done ? 'checked' : '') + '/><label for="plate' + i + '">' + plate.name + 
                '</label></li>';
            }).join('');
        }

        function toggleChecked(e) {
            if(!e.target.matches('input')) return;
            var item = e.target.dataset.index;
            items[item].done = !items[item].done;
            localStorage.setItem('items', JSON.stringify(items));
            updateList(items, itemsList);
        }

        function doButtonPress(e) {
            var action = e.target.dataset.action;
            switch(action) {
                case "clear":
                    items = [];
                    break;
                case "check":
                    items.map(function(item) {
                        return item.done = true;
                    });
                    break;
                case "uncheck":
                    items.map(function(item) {
                        return item.done = false;
                    });
                    break;
                default:
                    return;
            }
            localStorage.setItem('items', JSON.stringify(items));
            updateList(items, itemsList);
        }

        addItems.addEventListener('submit', handleSubmit);
        itemsList.addEventListener('click', toggleChecked);
        buttons.addEventListener('click', doButtonPress);

        updateList(items, itemsList);
    }
    document.addEventListener('DOMContentLoaded', newFun);
}());