const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electron', {
  
 
  readSalon: (fileName) => ipcRenderer.invoke('read-salon', fileName),
  writeSalon: (fileName, data) => ipcRenderer.invoke('write-salon', fileName, data),
  exitApp: () => ipcRenderer.send('exit-app'),
  hideApp: () => ipcRenderer.send('hide-window'),
  fullApp: () => ipcRenderer.send('toggle-maximize')
});