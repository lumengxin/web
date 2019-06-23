function initialize() {
    global.luckyNumber =23
}

function update() {
    global.luckyNumber = 42
}

initialize();
update();

process.exit();