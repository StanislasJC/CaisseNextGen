const { app, BrowserWindow } = require('electron');
const path = require('path');
const Product = require('./controllers/product');
const db = require('./../utilities/database');


/* TEST GETALLPRODUCT */

//console.log(Product.getAllProduct());

/* ------------------ */

//Création de la fenêtre 
const createWindow = () => {

    //Configuration de la fenêtre
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      }
    })

    //Chargement dee la page de lancement
    win.loadFile('src/index.html')
  }

  //Lorsque l'application est prête, créer la fenêtre 
  app.whenReady().then(() => {
    createWindow()
    
    // Gestion d'évènement lorsque toutes les fenêtres de l'app sont fermées (Windows)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
      })
    
    // Gestion d'évènement lorsque l'application se lance (Mac)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })