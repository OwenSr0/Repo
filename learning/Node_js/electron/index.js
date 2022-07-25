// Electron

// Se utiliza para portear paginas web, a aplicaciones de escritorio.

const { app, BrowserWindow } = require('electron')

let mainWindow;

// app const sacada de electron nos crea la ventana
app.on('ready', createWindow)

// Creamos la ventana
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    // pagina
    mainWindow.loadFile('../www/index.html')
}