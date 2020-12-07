const {app, BrowserWindow, ipcMain} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 480,
        frame: false,
        // resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
        autoHideMenuBar: true,
        fullscreen: true
    })

    win.loadURL(`file://${__dirname}/index.html`)

    ipcMain.on('window-close', function() {
        win.close();
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


