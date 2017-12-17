const storage = require('node-persist');

storage.initSync();

function setCurrentIndex(index) {
    storage.setItemSync('currentIndex', { index, date: new Date() });
}

function getCurrentIndex() {
    return storage.getItemSync('currentIndex').index || 0;
}

function getDateOfLastUpdate() {
    return storage.getItemSync('currentIndex').date;
}

module.exports = {
    setCurrentIndex,
    getCurrentIndex,
    getDateOfLastUpdate,
};

