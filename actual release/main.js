// Author: Andrey Tikhonov 2024

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');


const os = require('os');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

function setupDatabase() {
  const appDataPath = path.join(os.homedir(), 'AppData', 'Roaming', 'salon');
  const databaseSourcePath = path.join(__dirname, 'Database');
  const databaseTargetPath = path.join(appDataPath, 'Database');

  if (!fs.existsSync(databaseTargetPath)) {
    copyFolderSync(databaseSourcePath, databaseTargetPath);
    console.log('Database folder copied to %AppData%/salon');
  } else {
    console.log('Database folder already exists in %AppData%/salon');
  }
}

setupDatabase();
let windowBounds; 


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 748,
    frame: false,
    transparent: true,
   
  
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
       nodeIntegration: false,
       devTools: false
    }
  });

  mainWindow.loadFile('index.html');
 


 
  ipcMain.on('save-json-file', (event, { filename, jsonObject }) => {
    const filePath = path.join(__dirname, filename);
    fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File successfully written:', filePath);
        }
    });
});
  ipcMain.on('hide-window', () => {
    mainWindow.minimize();
  });
 

  ipcMain.on('toggle-maximize', () => {
    const isMaximized = mainWindow.isMaximized();
    if (!isMaximized) {
      windowBounds = mainWindow.getBounds(); 
      mainWindow.maximize();
    } else {
      mainWindow.unmaximize();
      if (windowBounds) {

        mainWindow.setBounds(windowBounds); 
      }
    }
  });


}
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('enable-gpu-rasterization');

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

ipcMain.on('exit-app', () => {
  app.quit();
});

function getSalonPath() {

  return path.join(app.getPath('appData'), 'salon');
}

ipcMain.handle('read-salon', async (event, fileName) => {
  const salonPath = getSalonPath();
  const filePath = path.join(salonPath, fileName);
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
});

ipcMain.handle('write-salon', async (event, fileName, data) => {
  const salonPath = getSalonPath();
  const filePath = path.join(salonPath, fileName);

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing file:', err);
    throw err;
  }
});
