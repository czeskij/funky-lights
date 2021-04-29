const { app, BrowserWindow } = require('electron');
const path = require('path');
const { WindowDimensions } = require('./constants');

const createWindow = () => {
    const win = new BrowserWindow({
        ...WindowDimensions,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        resizable: false
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});