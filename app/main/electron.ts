import path from 'path';
import { app, ipcMain, BrowserWindow } from 'electron';

console.log("app.getAppPath :", app.getAppPath());  //D:\MyWorkSpace\LixiaobingDeKe\workspace\react\visResumeMook\dist
const ROOT_PATH = path.join(app.getAppPath(), '../');
ipcMain.on('get-root-path',(event, arg) => {
    console.log("main get ipc message: get-root-path:", arg);
    event.reply('reply-root-path', ROOT_PATH);
})

function isDev() {
    //👉还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
    return process.env.NODE_ENV === 'development';
}

function createWindow(){
    //创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            devTools: true,
            nodeIntegration: true
        },
    });
    if(isDev()){
        mainWindow.loadURL(`http://127.0.0.1:7001`);
    }else {
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function(){
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})