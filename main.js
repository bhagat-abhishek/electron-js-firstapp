const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#74b1be",
      height: 60,
    },
  });

  win.loadFile(path.join(__dirname, "/ui/index.html"));
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
