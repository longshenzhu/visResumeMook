const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow(){
    //创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        },
    });
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function(){
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})