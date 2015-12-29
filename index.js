const electron = require('electron');
const crashReporter = electron.crashReporter;

let mainWindow = null;

crashReporter.start();

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

const menubar = require('menubar')({
  preloadWindow: true
});

menubar.on('ready', () => {
  console.log(`Booting app in ${process.env.NODE_ENV} with:`);
  console.log(`* Electron ${process.versions.electron}\n* Chrome ${process.versions.chrome}\n* Node ${process.versions.node}.`);

  mainWindow = menubar.window;

  if (process.env.HOT) {
    // Menubar implicitly loads index.html from the project root, but
    // we wanna load the dev server's index.html instead.
    mainWindow.loadURL('http://localhost:8080/index.html');
  } else {
    mainWindow.loadURL(`file://${__dirname}/app/app.html`);
  }

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }
});

mainWindow.on('closed', () => {
  mainWindow = null;
});
